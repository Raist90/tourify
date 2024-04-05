import { LoginForm } from '@/app/components'
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className='mx-auto grid w-fit gap-8 px-4 text-center md:p-8'>
      <div>
        <h2 className='mb-4 text-2xl'>Login</h2>
        <p>Login or Signup to unlock all Tourify&apos;s functionalities</p>
      </div>

      <LoginForm login={login} signup={signup} />
    </div>
  )
}
