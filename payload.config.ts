import sharp from 'sharp'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import { Posts } from '@/Collections/Posts'
import { Categories } from '@/Collections/Categories'
import { Media } from '@/Collections/Media'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ],
  }),

  // Define and configure your collections in this array
  collections: [Posts, Categories, Media],

  // Plugins
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})

