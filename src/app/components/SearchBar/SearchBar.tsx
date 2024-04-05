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
          autoFocus
          className='z-0 h-14 max-w-sm rounded pl-5 pr-8 focus:shadow focus:outline-none md:w-96'
          type='text'
          placeholder='Search anything...'
        />
      </form>
    </div>
  )
}
