export const feedQuery = `
*[_type == 'feed'][0]{
  header {
    title,
    text,
  },
}
`
