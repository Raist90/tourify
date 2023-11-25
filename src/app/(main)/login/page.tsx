'use client'
import { useAuthHandlers } from '@/helpers/clientHelpers'

export default function LoginPage() {
  const { handleGithubLogin } = useAuthHandlers()
  return (
    <section className='login'>
      <div>
        <h2>Login</h2>
        <h3>Sign in to your account</h3>
        <button onClick={handleGithubLogin}>Sign in with Github</button>
      </div>
    </section>
  )
}
