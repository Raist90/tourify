'use client'
import { signIn, signOut } from 'next-auth/react'

export const useAuthHandlers = () => {
  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: `${process.env.APP_URL}/homepage` })
  }

  const handleLogout = () => {
    signOut()
  }

  return { handleGithubLogin, handleLogout }
}
