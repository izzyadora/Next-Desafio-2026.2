"use server";

import bcrypt from "bcryptjs";
import prisma from "@/src/lib/db";
import type { User } from "@/types/data";
import { signIn, signOut } from "@/auth/auth";
import { AuthError } from "next-auth";

export async function getUser(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user as User | null;
}

export async function setUser(data: {
  name: string;
  email: string;
  password: string;
  role: "USER";
}) {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email, // corrigido: era data.name
      password: hashedPassword,
      role: data.role,
    },
  });
  return user;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Credenciais inválidas, tente novamente.";
        default:
          return "Ops, algo deu errado... :/";
      }
    }
    throw error;
  }
}

export type RegisterState = {
  error?: string;
  success?: boolean;
};

export async function registerUser(
  prevState: RegisterState | undefined,
  formData: FormData,
): Promise<RegisterState> {
  const name = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("senha") as string;
  const confirmarSenha = formData.get("confirmar-senha") as string;

  if (!name || !email || !senha) {
    return { error: "Preencha todos os campos." };
  }

  if (senha !== confirmarSenha) {
    return { error: "As senhas não coincidem." };
  }

  const existingUser = await getUser(email);
  if (existingUser) {
    return { error: "Este email já está cadastrado." };
  }

  try {
    await setUser({
      name,
      email,
      password: senha,
      role: "USER",
    });
  } catch {
    return { error: "Ops, algo deu errado ao cadastrar... :/" };
  }

  return { success: true };
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}
