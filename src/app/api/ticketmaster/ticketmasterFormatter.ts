import type { TicketmasterResponseType, Tour } from '@/app/types'

/**
 * This function formats the response from Ticketmaster API
 *
 * @example
 *   const formattedEvents = ticketmasterFormatter(events)
 */
export const ticketmasterFormatter = (
  events: TicketmasterResponseType['_embedded']['events'],
): Tour[] => {
  return events.map(({ id, images, name, dates, _embedded, url }) => {
    const { venues, attractions } = _embedded
    const artists = attractions?.map(({ id, name }) => {
      return { id, name }
    })

    return {
      id,
      name,
      date: dates.start.localDate,
      city: venues[0].city.name,
      country: venues[0].name,
      cover: images.filter((image) => image.width === 2048)[0].url,
      artists,
      url,
    }
  })
}
