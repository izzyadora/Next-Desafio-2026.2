import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user?.role;
      const isOnTabela = nextUrl.pathname.startsWith('/tabela');

      if (isOnTabela) {
        // só admin acessa a tabela
        if (isLoggedIn && role === 'ADMIN') return true;
        return false; // qualquer outro caso, bloqueia
      }

      if (nextUrl.pathname === '/login' && isLoggedIn) {
        // já logado tentando ver o login: redireciona conforme role
        if (role === 'ADMIN') {
          return Response.redirect(new URL('/tabela', nextUrl));
        }
        return Response.redirect(new URL('/', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;