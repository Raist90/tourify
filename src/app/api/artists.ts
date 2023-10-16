type Tour = {
  tourId: number
  tourName: string
  tourDate: string
  tourCity: string
  tourCountry: string
}

type Artist = {
  id: number
  name: string
  bio: string
  tours: Tour[]
}

export const artists: Artist[] = [
  {
    id: 1,
    name: 'Artist 1',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 1,
        tourName: 'Tour 1',
        tourDate: '2024-01-01',
        tourCity: 'City 1',
        tourCountry: 'Country 1',
      },
    ],
  },
  {
    id: 2,
    name: 'Artist 2',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 2,
        tourName: 'Tour 2',
        tourDate: '2024-02-02',
        tourCity: 'City 2',
        tourCountry: 'Country 2',
      },
    ],
  },
  {
    id: 3,
    name: 'Artist 3',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 3,
        tourName: 'Tour 3',
        tourDate: '2024-03-03',
        tourCity: 'City 3',
        tourCountry: 'Country 3',
      },
    ],
  },
  {
    id: 4,
    name: 'Artist 4',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 4,
        tourName: 'Tour 4',
        tourDate: '2024-04-04',
        tourCity: 'City 4',
        tourCountry: 'Country 4',
      },
    ],
  },
  {
    id: 5,
    name: 'Artist 5',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 5,
        tourName: 'Tour 5',
        tourDate: '2024-05-05',
        tourCity: 'City 5',
        tourCountry: 'Country 5',
      },
    ],
  },
  {
    id: 6,
    name: 'Artist 6',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 6,
        tourName: 'Tour 6',
        tourDate: '2024-06-06',
        tourCity: 'City 6',
        tourCountry: 'Country 6',
      },
    ],
  },
]
