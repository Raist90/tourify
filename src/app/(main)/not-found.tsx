'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

/** @todo `calc` on the container is a temporary solution to fix the height of the container */
export default function NotFound() {
  return (
    <div className='flex flex-col gap-6 w-full justify-center items-center m-auto h-[calc(100vh-88px)]'>
      <h2 className='text-2xl'>Oops! Something went wrong</h2>
      <p>Could not find requested resource</p>
      <Link
        tabIndex={0}
        href='/'
        className='border p-3 max-w-max inline-flex gap-2 hover:text-black hover:bg-white'
      >
        <ArrowLeft />
        Return Home
      </Link>
    </div>
  )
}
