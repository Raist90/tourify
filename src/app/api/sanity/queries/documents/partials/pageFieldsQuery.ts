import { blocksQuery } from "../../partials";

export const pageFieldsQuery = `
  title,
  'url': slug.current,
  'blocks': blocks[] {${blocksQuery}}
`
