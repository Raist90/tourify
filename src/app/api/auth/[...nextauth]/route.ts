import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { SERVER_ENV } from '@/app/env/server'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: SERVER_ENV.GITHUB_CLIENT_ID,
      clientSecret: SERVER_ENV.GITHUB_SECRET_ID,
    }),
  ],
  secret: SERVER_ENV.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
