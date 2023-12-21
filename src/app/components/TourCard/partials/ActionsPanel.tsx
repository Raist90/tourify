import { BellPlus, Star } from 'lucide-react'

/** @todo Make sure to implement the logic of these actions */
export const ActionsPanel = () => {
  return (
    <div className='grid grid-cols-2 gap-2 mx-auto'>
      <button tabIndex={-1} title='Add this to favorites'>
        <Star className='hover:text-red-500' />
      </button>
      <button tabIndex={-1} title='Notify me about this'>
        <BellPlus className='hover:text-yellow-500' />
      </button>
    </div>
  )
}
