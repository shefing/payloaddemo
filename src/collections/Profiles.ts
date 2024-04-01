import { CollectionConfig } from 'payload/types'
import { QuoteBlock } from '../blocks/Quote'
const Profiles : CollectionConfig = {
  slug: 'profiles',
  admin: {
    useAsTitle: 'name',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {name: 'name' ,  type: 'text',unique:true},
    {name: 'socialId' ,  type: 'text',unique:true},
    {name:"profilePic",type:"upload",relationTo:"media"},
    {name:"about",type:"richText"},
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },
    // Add more fields as needed
  ],
}

export default Profiles
