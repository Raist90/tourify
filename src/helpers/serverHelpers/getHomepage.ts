import { settingsQuery } from '@/api'
import type { HomepageType } from '@/types'
import { api } from '@/trpc/server'

export const getHomepage = async () => {
  const { homepage }: Awaited<HomepageType> = await api.homepage.byQuery.query({
    query: settingsQuery,
  })
  return homepage
}
