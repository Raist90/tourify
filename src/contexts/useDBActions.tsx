'use client'
import { generateSupabaseActions } from '@/supabase/helpers'
import { createContext, useContext } from 'react'

type Actions = Awaited<ReturnType<typeof generateSupabaseActions>>

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
