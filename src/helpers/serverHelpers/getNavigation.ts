import { navigationQuery } from '@/app/api'
import { api } from '@/trpc/server'

export const getNavigation = async () => {
  const navigationData = await api.navigation.byQuery.query({
    query: navigationQuery,
  })
  return navigationData
}
