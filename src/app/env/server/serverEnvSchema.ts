import z from 'zod'

const serverEnvSchema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_SECRET_ID: z.string(),
  TICKETMASTER_API: z.string().url(),
  TICKETMASTER_API_KEY: z.string(),
  TICKETMASTER_API_SECRET: z.string(),
})

export const SERVER_ENV = serverEnvSchema.parse(process.env)
