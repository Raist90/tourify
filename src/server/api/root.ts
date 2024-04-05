import { createTRPCRouter } from '@/server/api/trpc'
import { sanityRouter, ticketmasterRouter } from './routes'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blocks: sanityRouter,
  feed: sanityRouter,
  homepage: sanityRouter,
  navigation: sanityRouter,
  page: sanityRouter,
  settings: sanityRouter,
  musicEvents: ticketmasterRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
