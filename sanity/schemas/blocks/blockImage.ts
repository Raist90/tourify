'use client'
import { Image } from "lucide-react"
import { defineField } from "sanity"
import { blockImageFields } from "./partials"

const fields = [
  /** @todo For some reason this is not required even if I set a validation rule, try to fix this with a custom validation rule */
  defineField({
    name: 'image',
    title: 'Image',
    type: 'image',
    description: 'This is the image of the block',
    fields: [
      ...blockImageFields,
    ],
  }),
  defineField({
    name: 'renderCaption',
    title: 'Render Caption?',
    type: 'boolean',
    initialValue: false,
    description: 'Should the caption be rendered on the page?',
    validation: (Rule) => Rule.required()
  }),
  defineField({
    name: 'caption',
    title: 'Caption',
    type: 'string',
    description: 'This is the caption of the image',
    hidden: ({ parent }: Record<string, any>) => !parent?.renderCaption,
  }),
]

export const blockImage = defineField({
  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
    },
    prepare({ title, media }) {
      if (!title || !media) return { title: 'Missing alt tag or media' }
      return {
        title: 'Image Block',
        media: media,
        subtitle: title,
      }
    }
  },
  icon: Image,
  name: 'blockImage',
  title: 'Image',
  type: 'object',
  fields
})
