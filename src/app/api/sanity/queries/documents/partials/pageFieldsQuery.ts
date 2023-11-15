import { blocksQuery } from '../..'

export const pageFieldsQuery = `
  title,
  'url': slug.current,
  'blocks': blocks[] {${blocksQuery}}
`
