type Item = Record<string, unknown>

/** @description Removes duplicates from an array of objects based on a given parameter
 *
 * @param {Record<string, string | number>[]} array - Array of objects
 * @param {NonNullable<string | number>} param - Parameter to compare
 *
 * @example removeArrayDuplicates(arrayWithDuplicates, 'name')
 */
export const removeArrayDuplicates = <T extends Item>(
  array: T[],
  param: keyof T & (string | number),
): T[] => {
  return [...new Map(array.map((item) => [item[param], item])).values()]
}
