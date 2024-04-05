/**
 * Capitalize the first letter of a string
 *
 * @example
 *   capitalize('hello world') // 'Hello world'
 *
 * @param {string} str - The string to capitalize
 */
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
