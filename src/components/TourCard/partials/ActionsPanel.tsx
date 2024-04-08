'use client'
import { useDBActions } from '@/contexts'
import type { Tour } from '@/types'
import { BellPlus, Star } from 'lucide-react'

type ActionsPanelProps = {
  tour: Tour
}

export const ActionsPanel = ({ tour }: ActionsPanelProps) => {
  const actions = useDBActions()
  if (!actions) return
  const { addTour, getProfile } = actions
  const handleClick = async () => {
    const user = await getProfile()
    const userId = user[0].id
    addTour(userId, tour)
  }
  return (
    <div className='mx-auto grid grid-cols-2 gap-2'>
      <button
        // tabIndex={-1}
        onClick={handleClick}
        title='Add this to favorites'
      >
        <Star className='hover:text-red-500' />
      </button>
      <button tabIndex={-1} title='Notify me about this'>
        <BellPlus className='hover:text-yellow-500' />
      </button>
    </div>
  )
}
