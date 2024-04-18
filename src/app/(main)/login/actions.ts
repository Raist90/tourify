'use server'

import { addProfile } from '@/app/api/supabase'
import { createClient } from '@/helpers/serverHelpers'
import { getUser } from '@/supabase/helpers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  /**
   * @todo Ideally `getUser` should always return the correct data. Maybe we can
   *   return both `data` and `error` from it and then consume `dbErrorHandler`
   *   here
   */
  const { id, email } = (await getUser(supabase)) || {}

  if (error || !id || !email) {
    redirect('/error')
  }

  await addProfile(id, email)

  revalidatePath('/', 'layout')
  redirect('/')
}
