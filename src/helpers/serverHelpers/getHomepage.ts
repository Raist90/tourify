import { settingsQuery } from '@/api'
import { api } from '@/trpc/server'
import type { HomepageType } from '@/types'

export const getHomepage = async () => {
  const { homepage }: Awaited<HomepageType> = await api.homepage.byQuery.query({
    query: settingsQuery,
  })
  return homepage
}
