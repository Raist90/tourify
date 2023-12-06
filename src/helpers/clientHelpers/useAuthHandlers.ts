'use client'
import { signIn, signOut } from 'next-auth/react'
import { CLIENT_ENV } from '@/app/env/client'

export const useAuthHandlers = () => {
  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: `${CLIENT_ENV.APP_URL}/homepage` })
  }

  const handleLogout = () => {
    signOut()
  }

  return { handleGithubLogin, handleLogout }
}
