import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
        name: 'published',
        type: 'checkbox',
        defaultValue: false,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
        name: 'content',
        type: 'richText',
        required: true,
    },
    {
        name: 'author',
        type: 'relationship',
        relationTo: 'users',
    },
    {
        name: 'heroImage',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'categories',
        type: 'relationship',
        relationTo: 'categories',
        hasMany: true,
    },
  ],
  admin: {
    useAsTitle: 'title',
  }
}