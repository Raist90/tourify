import { removeArrayDuplicates } from '@/helpers/serverHelpers'
import type { TicketmasterResponseType } from '@/app/types'
import { ticketmasterFormatter } from './ticketmasterFormatter'
import { api } from '@/trpc/server'

export const getMusicEvents = async () => {
  /** @todo Not sure why `response` is typed as `unknown` here and not as `any` */
  const response = (await api.musicEvents.bySearch.query({
    keyword: '',
  })) as unknown as Awaited<TicketmasterResponseType>

  const events = ticketmasterFormatter(response._embedded.events)

  // We need to merge duplicated events into
  const eventsToMerge = []

  for (const event of events) {
    const { name } = event

    const duplicated = events.filter((event) => event.name === name)

    /** @todo Maybe I should put this in a helper or something */
    const merge = duplicated.reduce((acc, _, __, array) => {
      // Merge all duplicate event in one single object
      return {
        ...acc,
        date: array.map((event) => event.date),
        city: array.map((event) => event.city),
        country: array.map((event) => event.country),
      } as unknown as typeof event
    })

    eventsToMerge.push(merge)
  }

  const allEvents = [...events, ...eventsToMerge]

  // We use the removeArrayDuplicates helper to remove all duplicated events by comparing the `name` parameter
  return removeArrayDuplicates(allEvents, 'name')
}
