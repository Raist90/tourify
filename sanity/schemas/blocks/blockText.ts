'use client'
import { CaseSensitive } from 'lucide-react'
import { defineField } from 'sanity'

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
  })
]

export const blockText = defineField({
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    /** @todo Make sure to properly type this */
    prepare({ title, text }) {
      if (!title || !text) return { title: 'Missing title or text' }

      /** @todo Move this into an external function */
      const formattedText = text
        .filter((block: Record<string, any>) => block._type === 'block')
        .map((block: Record<string, any>) => block.children.map((child: Record<string, any>) => child.text).join(''))
        .join('\n') || 'Missing title or text'

      return {
        title: 'Text Block',
        subtitle: `${title} - ${formattedText}`,
      }
    },
  },
  icon: CaseSensitive,
  name: 'blockText',
  title: 'Text Block',
  type: 'object',
  fields
})
