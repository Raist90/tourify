type Artist = {
  id: string
  name: string
  bio?: string
}

export type Tour = {
  id: number
  name: string
  date: string | string[]
  city: string | string[]
  country: string | string[]
  artists: Artist[]
  cover: string
  featured?: boolean
}
