import type { NextAuthConfig } from 'next-auth';

declare module 'next-auth' {
  interface User {
    role: 'ADMIN' | 'USER';
  }
  interface Session {
    user: {
      role: 'ADMIN' | 'USER';
    } & User;
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.role = token.role as 'ADMIN' | 'USER';
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.role === 'ADMIN';

      const isOnTabela = nextUrl.pathname.startsWith('/tabela');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      if (isOnTabela) {
        if (isLoggedIn && isAdmin) return true;
        if (isLoggedIn) {
          return Response.redirect(new URL('/', nextUrl));
        }
        return false; 
      }
      if (isOnLogin && isLoggedIn) {
        const destination = isAdmin ? '/tabela' : '/';
        return Response.redirect(new URL(destination, nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;