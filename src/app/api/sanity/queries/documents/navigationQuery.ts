const navigationFields = `
  'id': _key,
  'type': navigationType,
  label,
  'hasChildren': select(
    hasChildren => hasChildren,
    false
  ),
  'href': select(
    navigationType == 'internal' => internalLink->slug.current,
    navigationType == 'external' => externalLink
  ),
`

export const navigationQuery = `
*[_type == 'navigation'][0]{
  'navigation': {
    primary[]{
      ${navigationFields}
      'children': children[]{
      ${navigationFields}
      }
    },
  }
}`
