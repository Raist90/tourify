import { api } from '@/trpc/server'
import { pageQuery } from '../../api'
/** @todo Make this import like this: `@/blocks` */
import * as blockComponents from '../../blocks'
import { blockRenderer } from '@/helpers/serverHelpers'

type PageParamsType = {
  params: {
    uri: string
  }
}

const SanityPage = async ({ params }: PageParamsType) => {
  const { uri } = params
  const slug = `${uri}`
  const query = pageQuery
  const { title, blocks: blocksData } = await api.page.bySlug.query({ query, slug })

  return (
    <div className='grid w-10/12 mx-auto gap-6 my-6 px-3'>
      <div>{title}</div>

      <div className='grid gap-3'>
        {blocksData && (blockRenderer(blocksData, blockComponents))}
      </div>
    </div>
  )
}

export default SanityPage
