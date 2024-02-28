import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHubProvider],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith('/note/edit')) return !!auth;
      return true;
    },
  },
});
