type Artist = {
  id: string
  name: string
  bio?: string
}

export type Tour = {
  id: string
  name: string
  date: string | string[]
  city: string | string[]
  country: string | string[]
  artists: Artist[]
  cover: string
  featured?: boolean
}
