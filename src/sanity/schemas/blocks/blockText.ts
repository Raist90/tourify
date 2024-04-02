import { CaseSensitive } from 'lucide-react'
import { defineField } from 'sanity'
import { formatPreviewText } from '@/sanity/helpers'

const fields = [
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    description: 'This is the title of the block',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'renderTitle',
    title: 'RenderTitle?',
    type: 'boolean',
    initialValue: false,
    description: 'Should the title be rendered on the page?',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'text',
    title: 'Text',
    type: 'array',
    of: [{ type: 'block' }],
    validation: (Rule) => Rule.required(),
  }),
]

export const blockText = defineField({
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare({ title, text }) {
      if (!title || !text) return { title: 'Missing title or text' }

      return {
        title: 'Text Block',
        subtitle: `${title} - ${formatPreviewText(text)}`,
      }
    },
  },
  icon: CaseSensitive,
  name: 'blockText',
  title: 'Text Block',
  type: 'object',
  fields,
})
