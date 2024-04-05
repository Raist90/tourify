// don't import this from the `index.ts` file or else it will crash the app
import { blockImageQuery } from './blockImageQuery'
import { blockTextQuery } from './blockTextQuery'

export const blockTextImageQuery = `
  'id': _key,
  'type': _type,
  ${blockImageQuery},
  ${blockTextQuery},
  imagePosition,
`
