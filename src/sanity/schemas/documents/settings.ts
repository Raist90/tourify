import { Settings } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  fields: [
    /** @todo This field exists only in order to provide a `preview` on `Sanity` */
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Settings',
      hidden: true,
    }),
    defineField({
      name: 'homepage',
      title: 'Homepage',
      type: 'reference',
      description: 'Select the page you want to be the homepage',
      to: [{ type: 'page' }],
    }),
  ],
})
