import { ticketmasterFormatter } from '@/app/api/ticketmaster'
import { SERVER_ENV } from '@/env/server'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { tourSchema, type TicketmasterResponseType } from '@/types'
import { z } from 'zod'

const ticketMasterUrl = SERVER_ENV.TICKETMASTER_API
const apiKey = SERVER_ENV.TICKETMASTER_API_KEY

/**
 * This is the TRPC router for the Ticketmaster API. You need to pass a
 * `keyword` string to the `bySearch` query. If you don't need to pass a keyword
 * then just use an empty string
 */
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
        includeTest: 'no',
        locale: 'it-it',
        segmentId: 'KZFzniwnSyZfZ7v7nJ',
        size: 8,
      }

      const url = `${ticketMasterUrl}/events?apikey=${apiKey}&keyword=${keyword}&locale=${options.locale}&size=${options.size}&segmentId=${options.segmentId}&countryCode=${options.countryCode}&page=${page}&includeTest=${options.includeTest}`

      const response = await fetch(url)
      const data: Awaited<TicketmasterResponseType> = await response.json()

      const embedded = data?._embedded || {}
      const events = embedded?.events || []

      if (!events.length)
        return {
          totalPages: 0,
          tours: [],
        }

      const eventsToFormat = ticketmasterFormatter(events)
      const totalPages = data.page.totalPages

      return {
        totalPages,
        tours: tourSchema.parse(eventsToFormat),
      }
    }),
})
