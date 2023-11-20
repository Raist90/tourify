import type { TypedObject } from "sanity"

/** @todo Make sure to properly type this */
export const formatPreviewText = (text: TypedObject[]) => {
  if (!text) return 'Missing text'
  return text
    .filter((block: Record<string, any>) => block._type === 'block')
    .map((block: Record<string, any>) => block.children.map((child: Record<string, any>) => child.text).join(''))
    .join('\n') || 'Missing title or text'
}
