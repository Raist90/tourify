import { Artist } from '../types'

const artistsWithoutImages: Omit<Artist, 'cover'>[] = [
  {
    id: 1,
    name: 'Artist 1',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    featured: true,
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
    featured: true,
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
    featured: true,
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
  {
    id: 7,
    name: 'Artist 7',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 7,
        tourName: 'Tour 7',
        tourDate: '2024-07-07',
        tourCity: 'City 7',
        tourCountry: 'Country 7',
      },
    ],
  },
  {
    id: 8,
    name: 'Artist 8',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 8,
        tourName: 'Tour 8',
        tourDate: '2024-08-08',
        tourCity: 'City 8',
        tourCountry: 'Country 8',
      },
    ],
  },
  {
    id: 9,
    name: 'Artist 9',
    bio: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    tours: [
      {
        tourId: 9,
        tourName: 'Tour 9',
        tourDate: '2024-09-09',
        tourCity: 'City 9',
        tourCountry: 'Country 9',
      },
    ],
  },
]

/** @description Add a random unsplash image for all artists */
const unsplashImages = [
  'https://source.unsplash.com/1600x900/?concert',
  'https://source.unsplash.com/1600x900/?music',
  'https://source.unsplash.com/1600x900/?band',
  'https://source.unsplash.com/1600x900/?guitar',
  'https://source.unsplash.com/1600x900/?drums',
  'https://source.unsplash.com/1600x900/?musician',
]

export const artists: Artist[] = artistsWithoutImages.map((artist) => {
  return {
    ...artist,
    cover: unsplashImages[Math.floor(Math.random() * unsplashImages.length)],
  }
})
