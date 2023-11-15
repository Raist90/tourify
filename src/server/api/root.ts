import { sanityRouter } from './routes'
import { createTRPCRouter } from '@/server/api/trpc'

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
})

// export type definition of API
export type AppRouter = typeof appRouter
