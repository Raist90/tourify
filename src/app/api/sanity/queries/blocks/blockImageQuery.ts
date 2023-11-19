export const blockImageQuery = `
  'id': _key,
  'caption': select(renderCaption => caption, null),
  'type': _type,
  image {
    'src': asset->url,
    alt,
    quality,
  } 
`
