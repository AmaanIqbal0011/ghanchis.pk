import { defineType, defineField } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
     validation: Rule => Rule.required()
    }),
    defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: Rule => Rule.required()
        })
  ],

  // 👀 preview config
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
})
