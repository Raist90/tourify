import { PageType } from "@/app/types"
import { api } from "@/trpc/server"

export const getPage = async (slug: string, query: string) => {
  const page: Awaited<PageType> = await api.page.bySlug.query({ query, slug })
  return page
}
