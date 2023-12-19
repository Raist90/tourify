'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SyntheticEvent, useEffect } from 'react'

const hardcodedRoute = '/tours/search?query='

export const SearchBar = ({ ...styles }) => {
  const router = useRouter()
  const { push, refresh } = router
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    push(hardcodedRoute + e.currentTarget.querySelector('input')?.value)
  }
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const url = pathName + searchParams

  useEffect(() => {
    refresh()
  }, [url])

  return (
    <div {...styles}>
      <form onSubmit={handleSubmit}>
        <input
          className='h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none'
          type='text'
          placeholder='Search anything...'
        />
      </form>
    </div>
  )
}
