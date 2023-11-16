import * as allBlocks from '../blocks'
import { capitalize } from '@/helpers/serverHelpers/capitalize'

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
