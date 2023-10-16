type Tour = {
  tourId: number
  tourName: string
  tourDate: string
  tourCity: string
  tourCountry: string
}

export type Artist = {
  id: number
  name: string
  bio: string
  tours: Tour[]
}
