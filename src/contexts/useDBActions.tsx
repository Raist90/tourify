'use client'
import type { Tour } from '@/types'
import { createContext, useContext } from 'react'

/** @todo Maybe it's best if I rename this */
type Actions = {
  getProfile: () => Promise<any[]>
  addTour: (userId: string, tour: Tour) => Promise<any[]>
  userToursIds: string[]
  deleteTour: (tour: Tour) => Promise<any[]>
}

const DBActionsContext = createContext<Actions | null>(null)

export const useDBActions = () => {
  return useContext<Actions | null>(DBActionsContext)
}

/** @todo Fix this abomination */
type DBActionsProviderProps = {
  children: React.ReactNode
  actions: Actions
}

export const DBActionsProvider = ({
  children,
  actions,
}: DBActionsProviderProps) => {
  if (!actions) return
  return (
    <DBActionsContext.Provider value={actions}>
      {children}
    </DBActionsContext.Provider>
  )
}
