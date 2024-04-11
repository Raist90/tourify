import { pageQuery } from '@/app/api'
import * as blockComponents from '@/blocks'
import { blockRenderer, getCmsPage } from '@/helpers/serverHelpers'
import { client } from '@/sanity/lib'
import { notFound } from 'next/navigation'

type PageParamsType = {
  params: {
    uri: string
  }
}

/** @todo It would be nice to refactor this */
export async function generateStaticParams() {
  const sanityClient = client
  const query = `*[_type == 'page']{'slug': slug.current}`
  const pages: Awaited<{ slug: string }[]> = await sanityClient.fetch(query)
  const slugs = pages.map((page) => ({
    uri: page.slug,
  }))
  return slugs
}

/**
 * @todo This should not be called `SanityPage` because it can also return the
 *   `Feed` component. Either change logic or rename it
 */
const SanityPage = async ({ params }: PageParamsType) => {
  const { uri } = params
  const slug = `${uri}`
  const query = pageQuery
  const { title, blocks: blocksData } = (await getCmsPage(slug, query)) || {}
  if (!title) return notFound()

  return (
    <div className='mx-auto my-6 grid w-10/12 gap-6 px-3'>
      <div>{title}</div>

      <div className='grid gap-3'>
        {blocksData && blockRenderer(blocksData, blockComponents)}
      </div>
    </div>
  )
}

export default SanityPage
