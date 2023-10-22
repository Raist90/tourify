import { api } from '@/trpc/server'
import { pageQuery } from '../api'

type PageParamsType = {
  params: {
    uri: string
  }
}

const SanityPage = async ({ params }: PageParamsType) => {
  const { uri } = params
  const slug = `${uri}`
  const query = pageQuery
  const { title } = await api.page.bySlug.query({ query, slug })

  return <div>{title}</div>
}

export default SanityPage
