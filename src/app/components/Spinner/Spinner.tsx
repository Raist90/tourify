import { Disc3 } from 'lucide-react'

export const Spinner: React.FC = () => {
  return (
    <div className='w-full inline-flex gap-2 justify-center'>
      <Disc3 className='animate-spin' />
      <p>Loading events...</p>
    </div>
  )
}
