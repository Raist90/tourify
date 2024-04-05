import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const sanityRouter = createTRPCRouter({
  byQuery: publicProcedure
    .input(
      z.object({
        query: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { query } = input
      const { sanityClient } = ctx
      try {
        const response = await sanityClient.fetch(query)

        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        return error
      }
    }),
  bySlug: publicProcedure
    .input(
      z.object({
        query: z.string(),
        slug: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { query, slug } = input
      const { sanityClient } = ctx
      try {
        const response = await sanityClient.fetch(query, { slug })

        return response
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
        return error
      }
    }),
})
