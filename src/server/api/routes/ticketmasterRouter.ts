import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { SERVER_ENV } from '@/app/env/server'
import { ticketmasterSchema } from '@/app/types'

const ticketMasterUrl = SERVER_ENV.TICKETMASTER_API
const apiKey = SERVER_ENV.TICKETMASTER_API_KEY

/** @description This is the TRPC router for the Ticketmaster API. You need to pass a `keyword` string to the `bySearch` query. If you don't need to pass a keyword then just use an empty string */
export const ticketmasterRouter = createTRPCRouter({
  bySearch: publicProcedure
    .input(
      z.object({
        keyword: z.string(),
        page: z.number().optional(),
      }),
    )
    .query(async ({ input }) => {
      const { keyword, page = 0 } = input
      const options = {
        countryCode: 'IT',
        locale: 'it-it',
        segmentId: 'KZFzniwnSyZfZ7v7nJ',
        size: 8,
      }

      const url = `${ticketMasterUrl}/events?apikey=${apiKey}&keyword=${keyword}&locale=${options.locale}&size=${options.size}&segmentId=${options.segmentId}&countryCode=${options.countryCode}&page=${page}`

      try {
        const data = await fetch(url).then((res) => res.json())

        const response = ticketmasterSchema.parse(data)

        return response
      } catch (error) {
        console.error(error)
        return error
      }
    }),
})
