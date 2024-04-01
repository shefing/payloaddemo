import { CollectionConfig } from 'payload/types'
import { QuoteBlock } from '../blocks/Quote'
import { MediaBlock } from '../blocks/MediaBlock'
import {RichTextImageBlockRight} from '../blocks/RichTextMediaBlockRight'
import {RichTextImageBlockLeft} from '../blocks/RichTextMediaBlockLeft'

const Campaigns : CollectionConfig = {
  slug: 'campaigns',
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {name: 'name' ,  type: 'text',unique:true},
    {
      name: "richText", // Name for rich text field
      type: "richText", // Rich text formatting supported
      required: true, // Mandatory field

  },               
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        QuoteBlock,MediaBlock,RichTextImageBlockLeft,RichTextImageBlockRight
      ],
    },
    // Add more fields as needed
  ],
}

export default Campaigns
