import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnTabela = nextUrl.pathname.startsWith('/tabela');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      if (isOnTabela) {
        if (isLoggedIn) return true;
        return false; 
      }

      if (isOnLogin && isLoggedIn) {
        return Response.redirect(new URL('/tabela', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;