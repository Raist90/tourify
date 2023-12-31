import type { TicketmasterResponseType } from '@/app/types'
import { removeArrayDuplicates } from '@/helpers/serverHelpers'

/** @description This function formats the response from Ticketmaster API
 *
 * @example const formattedEvents = ticketmasterFormatter(events)
 */
export const ticketmasterFormatter = (
  events: TicketmasterResponseType['_embedded']['events'],
) => {
  return events.map(({ id, images, name, dates, _embedded }) => {
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
      artists: removeArrayDuplicates(artists, 'name'),
    }
  })
}
