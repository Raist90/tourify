import { Newspaper } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export const feed = defineType({
  name: 'feed',
  title: 'Feed',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        /** @todo Maybe this should be a `portableText` instead? */
        defineField({
          name: 'text',
          title: 'Text',
          type: 'text',
        }),
      ],
    }),
  ],
})
