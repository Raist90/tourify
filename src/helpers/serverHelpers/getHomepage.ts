import { settingsQuery } from '@/app/api'
import type { HomepageType } from '@/app/types'
import { api } from '@/trpc/server'

export const getHomepage = async () => {
  const { homepage }: Awaited<HomepageType> = await api.homepage.byQuery.query({
    query: settingsQuery,
  })
  return homepage
}
