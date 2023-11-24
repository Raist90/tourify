'use client'
import { signIn, signOut } from 'next-auth/react'

export const useAuthHandlers = () => {
  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: 'http://localhost:3000/homepage' })
  }

  const handleLogout = () => {
    signOut()
  }

  return { handleGithubLogin, handleLogout }
}
