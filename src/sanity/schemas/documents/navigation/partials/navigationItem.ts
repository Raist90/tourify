import { defineField } from 'sanity'
import { navigationItemFields } from './navigationItemFields'

/** @todo Make this a `ParentNavigationItem` by changing it's name */
export const navigationItem = defineField({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [...navigationItemFields],
})
