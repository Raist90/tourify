import type { SanityDocument } from 'sanity'
import { CLIENT_ENV } from '@/app/env/client'

export const getPreviewUrl = (
  /** @todo Figure out how to type this */
  doc: SanityDocument & { slug: { current: string } },
) => {
  return doc?._type === 'feed'
    ? `${CLIENT_ENV.APP_URL}`
    : `${CLIENT_ENV.APP_URL}/${doc.slug.current}`
}
