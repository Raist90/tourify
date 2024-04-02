'use client'
import { FileText } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import { isUniqueAcrossAllDocuments } from '@/sanity/helpers'
import * as blocks from '@/sanity/schemas/blocks'

const allBlocks = Object.values(blocks)

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FileText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'This is the URL path of the page. Keep in mind this needs to be unique across all documents',
      options: {
        source: 'title',
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: allBlocks,
    }),
  ],
})
