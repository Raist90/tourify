import z from 'zod'

const artist = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string().optional(),
})

const tour = z.object({
  id: z.string(),
  name: z.string(),
  date: z.string(),
  city: z.string(),
  country: z.string(),
  artists: z.array(artist),
  cover: z.string(),
  featured: z.boolean().optional(),
})

export type Tour = z.infer<typeof tour>

export const tourSchema = z.array(tour)
