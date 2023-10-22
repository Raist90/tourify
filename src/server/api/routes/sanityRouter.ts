import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'

export const sanityRouter = createTRPCRouter({
  byQuery: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input, ctx }) => {
      const { query } = input
      const { sanityClient } = ctx
      try {
        const response = await sanityClient.fetch(query)

        return response
      } catch (error) {
        console.error(error)
        return error
      }
    }),
})
