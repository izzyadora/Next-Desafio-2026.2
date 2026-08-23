import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
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
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;