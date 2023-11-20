import { blockImageQuery, blockTextQuery } from ".";

export const blockTextImageQuery = `
  'id': _key,
  'type': _type,
  ${blockImageQuery},
  ${blockTextQuery},
  imagePosition,
`
