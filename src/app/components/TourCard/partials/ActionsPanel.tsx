import { BellPlus, Star } from 'lucide-react'

/** @todo Make sure to implement the logic of these actions */
export const ActionsPanel = () => {
  return (
    <div className='grid grid-cols-2 gap-2 mx-auto'>
      <button title='Aggiungi ai preferiti'>
        <Star className='hover:text-red-500' />
      </button>
      <button title='Notificami'>
        <BellPlus className='hover:text-yellow-500' />
      </button>
    </div>
  )
}
