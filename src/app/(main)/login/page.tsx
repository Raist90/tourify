import { login, signup } from './actions'

import { LoginForm } from '@/app/components'

export default function LoginPage() {
  return (
    <div className='text-center w-fit px-4 md:p-8 mx-auto grid gap-8'>
      <div>
        <h2 className='text-2xl mb-4'>Login</h2>
        <p>Login or Signup to unlock all Tourify&apos;s functionalities</p>
      </div>

      <LoginForm login={login} signup={signup} />
    </div>
  )
}
