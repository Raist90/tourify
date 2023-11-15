import type { SanityDocument } from 'sanity'

export const getPreviewUrl = (
  /** @todo Figure out how to type this */
  doc: SanityDocument & { slug: { current: string } },
) => {
  return doc?._type === 'feed'
    ? `${process.env.APP_URL}`
    : `${process.env.APP_URL}/${doc.slug.current}`
}
