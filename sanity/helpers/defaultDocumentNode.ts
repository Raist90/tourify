import type { SanityDocument } from 'sanity'
import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'
import { getPreviewUrl } from '~/helpers/getPreviewUrl'

/** @description Here all the documents we want to preview */
const allowedSchemaTypes = ['page']

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  if (allowedSchemaTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          /** @todo Figure out how to type this */
          url: (doc: SanityDocument & { slug: { current: string } }) =>
            getPreviewUrl(doc),
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}
