import { defineField } from 'sanity'
import { navigationItem } from './navigationItem'
import { navigationItemFields } from './navigationItemFields'

/** @description This is similar to regular `navigationItem` but can contain a nested level of other `navigationItems` */
export const parentNavigationItem = defineField({
  name: 'parentNavigationItem',
  title: 'Parent Navigation Item',
  type: 'object',
  fields: [
    ...navigationItemFields,
    defineField({
      name: 'hasChildren',
      title: 'Has Children?',
      type: 'boolean',
      description:
        'This is used to determine if the navigation item has children',
      initialValue: false,
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [navigationItem],
      hidden: ({ parent }) => !parent?.hasChildren,
    }),
  ],
})
