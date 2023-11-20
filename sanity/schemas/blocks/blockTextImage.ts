'use client'
import { Image } from "lucide-react";
import { defineField } from "sanity";
import { blockImage, blockText } from ".";
import { formatPreviewText } from "~sanity/helpers";

/** @description Since we are using the same fields as both blockImage and blockText, we can just import it from them */
const externalFields = [
  ...blockImage.fields,
  ...blockText.fields,
]

const fields = [
  defineField({
    name: 'imagePosition',
    title: 'Image Position',
    type: 'string',
    description: 'Choose the position of the image. This will also affect mobile view, so `left` will be on top and `right` will be on bottom',
    options: {
      list: ['left', 'right'],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'left',
  })
]

export const blockTextImage = defineField({
  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
      text: 'text',
    },
    prepare({ title, media, text }) {
      if (!title || !media || !text) return { title: 'Missing alt tag, media or text' }

      return {
        title: 'Text Image Block',
        media: media,
        subtitle: `${title} - ${formatPreviewText(text)}`,
      }
    }
  },
  icon: Image,
  name: 'blockTextImage',
  title: 'Text Image',
  type: 'object',
  fields: [
    ...externalFields,
    ...fields,
  ]
})
