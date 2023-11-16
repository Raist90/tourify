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
    prepare({ title, text }: { title: string, text: { _type: string, children: { text: string }[] }[] }) {
      /** @todo Move this into an external function */
      const formattedText = text
        .filter((block) => block._type === 'block')
        .map((block) => block.children.map((child) => child.text).join(''))
        .join('\n')

      return {
        title: 'Text Block',
        subtitle:
          title && formattedText ? `${title} - ${formattedText}` : `Missing title or text`,
      }
    },
  },
  icon: CaseSensitive,
  name: 'blockText',
  title: 'Title',
  type: 'object',
  fields: [...fields],
})
