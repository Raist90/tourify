'use client'

import { SyntheticEvent } from 'react'

const hardcodedRoute = '/search?query='

export const SearchBar = ({ ...styles }) => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    window.location.href =
      hardcodedRoute + e.currentTarget.querySelector('input')?.value
  }

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
