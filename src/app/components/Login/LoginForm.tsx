type LoginFormProps = {
  login: (formData: FormData) => Promise<void>
  signup: (formData: FormData) => Promise<void>
}

/** @todo Maybe it's best to use `...rest` here for styles */
export const LoginForm = ({ login, signup }: LoginFormProps) => {
  const inputStyles = 'text-black w-full md:w-80 block p-2 mb-4 pl-4'
  const buttonStyles = 'border p-2'
  return (
    <form className='md:mx-auto p-8 bg-black rounded-md'>
      <input
        autoComplete='email'
        className={inputStyles}
        id='email'
        name='email'
        type='email'
        required
        placeholder='Email'
      />
      <input
        autoComplete='current-password'
        className={inputStyles}
        id='password'
        name='password'
        type='password'
        required
        placeholder='Password'
      />
      <div className='grid grid-cols-2'>
        <button className={`${buttonStyles} border-r-0`} formAction={login}>
          Log in
        </button>
        <button className={buttonStyles} formAction={signup}>
          Sign up
        </button>
      </div>
    </form>
  )
}
