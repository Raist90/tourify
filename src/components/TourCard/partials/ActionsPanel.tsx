import { Toast } from '@/components/Toast'
import type { Tour } from '@/types'
import clsx from 'clsx'
import { BellPlus, Star } from 'lucide-react'
import { useState } from 'react'

type ActionsPanelProps = {
  isActive: boolean
  handleClick: () => Promise<void>
  tour: Tour
}

/** @todo These actions should be available only if user is logged in */
export const ActionsPanel = ({ isActive, handleClick }: ActionsPanelProps) => {
  let [isOpen, setIsOpen] = useState(false)
  const addToFavorite = () => {
    handleClick()
    setIsOpen(true)
  }

  const closeDialog = () => setIsOpen(false)
  return (
    <>
      <div className='mx-auto grid grid-cols-2 gap-2'>
        <button
          // tabIndex={-1}
          onClick={addToFavorite}
          title='Add this to favorites'
        >
          <Star
            className={clsx(isActive && 'text-red-500', 'hover:text-red-500')}
          />
        </button>
        <button tabIndex={-1} title='Notify me about this'>
          <BellPlus className='hover:text-yellow-500' />
        </button>
      </div>

      {isActive ? (
        <Toast
          isOpen={isOpen}
          closeDialog={closeDialog}
          message='Event successfully added to your wishlist'
          type='success'
        />
      ) : (
        <Toast
          isOpen={isOpen}
          closeDialog={closeDialog}
          message='Event successfully removed from your wishlist'
          type='success'
        />
      )}
    </>
  )
}
