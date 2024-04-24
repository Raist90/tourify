import {
  addTour,
  deleteTour,
  getProfile,
  getUserTours,
} from '@/app/api/supabase'
import { createClient } from '@/helpers/serverHelpers'
import { getSession } from './getSession'
import { getUser } from './getUser'

export const generateSupabaseActions = async () => {
  const session = await getSession()

  let userToursIds = []

  if (session) {
    const supabase = createClient()
    const { id } = (await getUser(supabase)) || {}

    if (id) {
      const userTours = await getUserTours(id)
      userToursIds = userTours?.map((tour) => tour.id) || []
    }
  }

  return {
    addTour,
    deleteTour,
    getProfile,
    session,
    userToursIds,
  }
}
