import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor ,LinkFeature ,AlignFeature ,IndentFeature,BoldTextFeature,TreeViewFeature,ParagraphFeature,feat } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Media } from './collections/Media'
import Profiles from './collections/Profiles'
import Campaigns from './collections/Campaigns'
import {
  BlocksFeature,
} from '@payloadcms/richtext-lexical'
import { QuoteBlock } from './blocks/Quote'
import { MediaBlock } from './blocks/MediaBlock'
import {RichTextImageBlockRight} from './blocks/RichTextMediaBlockRight'
import {RichTextImageBlockLeft} from './blocks/RichTextMediaBlockLeft'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    css: path.resolve(__dirname, './css/admin.css'),
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
          QuoteBlock,
          MediaBlock,
          RichTextImageBlockRight,
          RichTextImageBlockLeft
        ],
      })]
    }),
  collections: [Users,Media,Profiles,Campaigns],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
