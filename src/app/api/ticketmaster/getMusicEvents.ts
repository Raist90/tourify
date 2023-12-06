import { removeArrayDuplicates } from '@/helpers/serverHelpers'
import type { TicketmasterResponseType } from '@/app/types'
import { ticketmasterFormatter } from './ticketmasterFormatter'

const ticketMasterUrl = process.env.TICKETMASTER_API
const apiKey = process.env.TICKETMASTER_API_KEY
const lastFMUrl = process.env.LASTFM_API

export const getMusicEvents = async () => {
  const url = `${ticketMasterUrl}/events?apikey=${apiKey}&locale=it-it&size=18&segmentId=KZFzniwnSyZfZ7v7nJ&countryCode=IT`
  const rawEvents = await fetch(url)

  const response: Awaited<TicketmasterResponseType> = await rawEvents.json()

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
