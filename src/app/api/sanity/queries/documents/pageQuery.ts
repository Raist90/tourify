import { pageFieldsQuery } from './partials'

export const pageQuery = `
*[_type == "page" && slug.current == $slug][0] {
  ${pageFieldsQuery}
}
`
