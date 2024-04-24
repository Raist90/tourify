'use server'
import { createClient } from '@/helpers/serverHelpers'
import { dbErrorHandler, getUser } from '@/supabase/helpers'
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

  if (error) {
    dbErrorHandler(error)
  }

  return data
}

export const deleteTour = async (tour: Tour) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('Tours')
    .delete()
    .eq('id', tour.id)
    .select()

  if (error) dbErrorHandler(error, '/error')

  return data
}

export const getProfile = async () => {
  const supabase = createClient()
  const { id } = (await getUser(supabase)) || {}

  let profile

  if (id) {
    const { data, error } = await supabase
      .from('Profiles')
      .select('*')
      .eq('id', id)

    if (error) dbErrorHandler(error)

    /** @todo I need to parse this data to avoid using the exclamation point */
    profile = data!
  } else profile = []

  return profile
}

export const getUserTours = async (userId: string) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('Tours')
    .select('*')
    .eq('user_id', userId)

  if (error) dbErrorHandler(error, '/error')

  return data
}

export const addProfile = async (id: string, email: string) => {
  const supabase = createClient()
  const { data, error } = await supabase.from('Profiles').upsert({
    id: id,
    email: email,
  })

  if (error) redirect('/error')

  return data
}
