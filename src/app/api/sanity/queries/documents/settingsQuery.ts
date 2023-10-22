import { pageFieldsQuery } from './partials'

export const settingsQuery = `
*[_type == 'settings'][0] {
  'homepage': homepage -> {
    ${pageFieldsQuery}
  }
}`
