import { pageQuery } from '@/api'
import { SEARCH_ROUTE } from '@/app/constants'
import * as blockComponents from '@/blocks'
import { blockRenderer, getCmsPage, pageGetter } from '@/helpers/serverHelpers'
import { notFound } from 'next/navigation'

type PageParamsType = {
  params: {
    uri: string
  }
  searchParams:
    | {
        query: string
      }
    | {}
}

/** @todo This should not be called `SanityPage` because it can also return the `Feed` component. Either change logic or rename it */
const SanityPage = async ({ params, searchParams }: PageParamsType) => {
  // return `pageGetter` which early returns the `Feed` component, else will try to fetch a `Sanity` page
  if ('query' in searchParams)
    return pageGetter(SEARCH_ROUTE, searchParams.query)

  const { uri } = params
  const slug = `${uri}`
  const query = pageQuery
  const { title, blocks: blocksData } = (await getCmsPage(slug, query)) || {}
  if (!title || !blocksData) return notFound()

  return (
    <div className='grid w-10/12 mx-auto gap-6 my-6 px-3'>
      <div>{title}</div>

      <div className='grid gap-3'>
        {blocksData && blockRenderer(blocksData, blockComponents)}
      </div>
    </div>
  )
}

export default SanityPage
