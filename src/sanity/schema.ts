import { type SchemaTypeDefinition } from 'sanity'
import * as documents from './schemas/documents'

const allDocuments = Object.values(documents)

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...allDocuments],
}
