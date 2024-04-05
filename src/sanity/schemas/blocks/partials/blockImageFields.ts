import { defineField } from 'sanity'

export const blockImageFields = [
  defineField({
    name: 'alt',
    title: 'Alt tag',
    type: 'string',
    description: 'This is the alt text of the image',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'quality',
    title: 'Quality',
    type: 'string',
    options: {
      list: ['50', '75', '100'],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: '100',
    description:
      'This is the quality of the image. Choose 100 for full quality',
    validation: (Rule) => Rule.required(),
  }),
]
