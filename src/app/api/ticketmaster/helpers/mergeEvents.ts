import type { Tour } from '@/app/types'
import { removeArrayDuplicates } from '@/helpers/serverHelpers'

export const mergeEvents = (events: Tour[]) => {
  const mergedEvents = []

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

    mergedEvents.push(merge)
  }

  const allEvents = [...events, ...mergedEvents]

  return removeArrayDuplicates(allEvents, 'name')
}
