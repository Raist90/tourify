/* eslint-disable no-console */
import type { AuthError, PostgrestError } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'

type Redirect = '/login' | '/error'

/** @todo Make sure to add other error actions */
export const dbErrorHandler = (
  error: PostgrestError | AuthError,
  redirectPath?: Redirect,
): any[] => {
  if (process.env.NODE_ENV) {
    const errorObj = {
      code: error.code,
      message: error.message,
    }
    if ('status' in error) {
      console.log({ ...errorObj, status: error.status })
    } else console.log(errorObj)
  }

  if (redirectPath) {
    redirect(redirectPath)
  }

  /**
   * @todo Since `supabase` will always return an array I think it's safe here
   *   to return an empty array, but it's best to double check it. Maybe the
   *   best solution here would be to always parse the response with `Zod` and
   *   make it a union with an empty array
   */
  return []
}
