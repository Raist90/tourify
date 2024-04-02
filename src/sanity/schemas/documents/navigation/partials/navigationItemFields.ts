import { defineField } from 'sanity'

export const navigationItemFields = [
  /** @todo Do we really need `external` links? */
  defineField({
    name: 'navigationType',
    title: 'Navigation Type',
    type: 'string',
    description:
      'The type of navigation item. Choose internal for pages within the app, or external for links to other websites',
    options: {
      list: ['external', 'internal'],
      layout: 'radio',
      direction: 'horizontal',
    },
    initialValue: 'internal',
  }),
  defineField({
    name: 'label',
    title: 'Label',
    type: 'string',
    description: 'The label of the navigation item',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'externalLink',
    title: 'External Link',
    type: 'string',
    description: 'The link of the navigation item',
    hidden: ({ parent }) => parent?.navigationType !== 'external',
  }),
  defineField({
    name: 'internalLink',
    title: 'Internal Link',
    type: 'reference',
    description: 'The link of the navigation item',
    to: [{ type: 'page' }],
    hidden: ({ parent }) => parent?.navigationType !== 'internal',
  }),
]
