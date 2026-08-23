import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ message: "Login realizado com sucesso", user });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao processar requisição", details: err }, { status: 500 });
  }
}