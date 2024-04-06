import { Disc3 } from 'lucide-react'

export const Spinner = () => {
  return (
    <div className='inline-flex w-full justify-center gap-2'>
      <Disc3 className='animate-spin' />
      <p>Loading events...</p>
    </div>
  )
}
