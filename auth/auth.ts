import NextAuth from "next-auth";
import { authConfig } from "@/auth/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "@/actions/login/actions";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        return token;
      }

      if (token.email) {
        const dbUser = await getUser(token.email as string);

        if (!dbUser) {
          return {}; 
        }
        token.role = dbUser.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (!token || !token.email) {
        return null as any;
      }

      if (session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER';
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return{
            ...user,
            id: user.id.toString(),
          };
        }
        return null;
      },
    }),
  ],
});