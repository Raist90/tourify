'use server'
import { createClient } from '@/helpers/serverHelpers'
import { getUser } from '@/supabase/helpers'
import type { Tour } from '@/types'
import { redirect } from 'next/navigation'

export const addTour = async (userId: string, tour: Tour) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('Tours')
    .insert({
      id: tour.id,
      name: tour.name,
      date: tour.date,
      city: tour.city,
      country: tour.country,
      artist_name: tour.artists[0].name,
      artist_id: tour.artists[0].id,
      cover: tour.cover,
      url: tour.url,
      user_id: userId,
    })
    .select()

  /** @todo We should probably do something different here */
  if (error) redirect('/error')

  return data
}

export const getProfile = async () => {
  const supabase = createClient()
  const { id } = await getUser(supabase)

  const { data, error } = await supabase
    .from('Profiles')
    .select('*')
    .eq('id', id)

  /** @todo We should probably do something else here */
  if (error) redirect('/error')

  return data
}

export const getUserTours = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.from('Tours').select('*')

  /** @todo We should probably do something else here */
  if (!data || error) redirect('/error')

  return data
}
