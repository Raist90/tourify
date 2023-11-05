'use client'
import { Navigation } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { parentNavigationItem } from './partials/parentNavigationItem'

const navigationGroups = [
  { title: 'Primary', name: 'primary' },
  { title: 'Secondary', name: 'secondary' },
]

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: Navigation,
  groups: navigationGroups,
  fields: [
    /** @todo This field exists only in order to provide a `preview` on `Sanity` */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Navigation',
      hidden: true,
    }),
    defineField({
      name: 'primary',
      title: 'Primary',
      type: 'array',
      description: 'This is the primary navigation of the app',
      of: [parentNavigationItem],
      group: 'primary',
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary',
      type: 'array',
      description: 'This is the secondary navigation of the app',
      of: [parentNavigationItem],
      group: 'secondary',
    }),
  ],
})
