type Image = {
  width: number
  url: string
}

type Dates = {
  start: {
    localDate: string
  }
}

/** @description Attraction is the artist */
type Attraction = {
  id: string
  name: string
}

/** @description Venue is the event location */
type Venue = {
  city: {
    name: string
  }
  /** @description This is the building name where the event will take place */
  name: string
}

type EventType = {
  _embedded: {
    attractions: Attraction[]
    venues: Venue[]
  }
  id: string
  images: Image[]
  name: string
  dates: Dates
}

export type TicketmasterResponseType = {
  _embedded: {
    events: EventType[]
  }
}
