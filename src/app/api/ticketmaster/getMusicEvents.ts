import type { TicketmasterResponseType } from '@/app/types'
import { ticketmasterFormatter } from './ticketmasterFormatter'
import { api } from '@/trpc/server'

export const getMusicEvents = async (keyword?: string) => {
  /** @todo Not sure why `response` is typed as `unknown` here and not as `any` */
  const response = (await api.musicEvents.bySearch.query({
    keyword: keyword || '',
  })) as unknown as Awaited<TicketmasterResponseType>

  const events = ticketmasterFormatter(response._embedded.events)

  return events
}
