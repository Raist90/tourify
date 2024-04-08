'use client'
import type { Tour } from '@/types'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

type Actions = {
  getProfile: () => Promise<any[]>
  addTour: (userId: string, tour: Tour) => Promise<any[]>
  getUserTours: (supabase: SupabaseClient) => Promise<{ tours: any }[]>
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
