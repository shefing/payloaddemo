import { Block } from "payload/types";

export const RichTextImageBlockLeft: Block = {
    slug: "RichTextImageLeft", // Unique identifier
    //   labels: "Rich Text with Image", // Label for the block in the admin interface
    fields: [
        {
            type: 'row', // required
            fields: [
                // required
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    admin: {
                        width: "50%",
                    },
                },
                {
                    name: "richText", // Name for rich text field
                    type: "richText", // Rich text formatting supported
                    required: true, // Mandatory field
                    admin: {
                        width: "50%", // Set width to half the available space
                    },
                }
            ],
        }
    ]
}
