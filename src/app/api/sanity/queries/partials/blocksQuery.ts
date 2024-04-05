import { capitalize } from '@/helpers/serverHelpers/capitalize'
import * as allBlocks from '../blocks'

export const blocksQuery = Object.entries(allBlocks)
  .map(([blockQueryKey, blockQuery]) => {
    const blockType = blockQueryKey.replace('Query', '')
    const blockName = blockType.replace('block', '')

    return `
      _type == '${blockType}' => {
        'name': '${capitalize(blockName)}',
        'data': {${blockQuery}}
      }
`
  })
  .join(',')
