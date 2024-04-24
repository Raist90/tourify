import { Toast } from '@/components/Toast'
import { useDBActions } from '@/contexts'
import type { Tour } from '@/types'
import clsx from 'clsx'
import { BellPlus, Star } from 'lucide-react'
import { useState } from 'react'

type ActionsPanelProps = {
  isActive: boolean
  handleClick: () => Promise<void>
  tour: Tour
}

const getToastProps = (session: boolean, isActive: boolean) => {
  const toastOptionsList = {
    noSession: {
      message: 'Login to use this functionality',
      type: 'warning',
    } as const,
    addToList: {
      message: 'Event successfully added to your wishlist',
      type: 'success',
    } as const,
    removeFromList: {
      message: 'Event successfully removed from your wishlist',
      type: 'success',
    } as const,
  }

  switch (true) {
    case !session:
      return toastOptionsList['noSession']
    case session && isActive:
      return toastOptionsList['addToList']
    default:
      return toastOptionsList['removeFromList']
  }
}

/** @todo These actions should be available only if user is logged in */
export const ActionsPanel = ({ isActive, handleClick }: ActionsPanelProps) => {
  let [isOpen, setIsOpen] = useState(false)
  const { session } = useDBActions()!

  const addToFavorite = () => {
    if (session) {
      handleClick()
    }
    setIsOpen(true)
  }

  const toastProps = getToastProps(session, isActive)

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

      <Toast isOpen={isOpen} closeDialog={closeDialog} {...toastProps} />
    </>
  )
}
