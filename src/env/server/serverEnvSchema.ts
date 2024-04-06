import z from 'zod'

const serverEnvSchema = z.object({
  TICKETMASTER_API: z.string().url(),
  TICKETMASTER_API_KEY: z.string(),
  TICKETMASTER_API_SECRET: z.string(),
})

export const SERVER_ENV = serverEnvSchema.parse(process.env)
