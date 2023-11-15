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
    type: 'text',
    description: 'This is the text of the block',
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
      return {
        title: 'Text Block',
        subtitle:
          title && text ? `${title} - ${text}` : `Missing title or text`,
      }
    },
  },
  icon: CaseSensitive,
  name: 'blockText',
  title: 'Title',
  type: 'object',
  fields: [...fields],
})
