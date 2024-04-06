import { api } from '@/trpc/server'
import { PageType } from '@/types'

export const getCmsPage = async (slug: string, query: string) => {
  const page: Awaited<PageType> = await api.page.bySlug.query({ query, slug })
  return page
}
