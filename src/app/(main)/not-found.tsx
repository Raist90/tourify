'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

/**
 * @todo `calc` on the container is a temporary solution to fix the height of
 *   the container
 */
export default function NotFound() {
  return (
    <div className='m-auto flex h-[calc(100vh-88px)] w-full flex-col items-center justify-center gap-6'>
      <h2 className='text-2xl'>Oops! Something went wrong</h2>
      <p>Could not find requested resource</p>
      <Link
        tabIndex={0}
        href='/'
        className='inline-flex max-w-max gap-2 border p-3 hover:bg-white hover:text-black'
      >
        <ArrowLeft />
        Return Home
      </Link>
    </div>
  )
}
