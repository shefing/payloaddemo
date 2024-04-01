import { Block } from "payload/types";

export const QuoteBlock: Block = {
  slug: "Quote", // required
  imageURL: "https://www.pngall.com/wp-content/uploads/4/Quotation-Mark-PNG-Clipart.png",
  imageAltText: "A nice thumbnail image to show what this block looks like",
  interfaceName: "QuoteBlock", // optional
  fields: [
    {
      name: "quotes", // required
      type: "array", // required
      label: "Quotes",      
      minRows: 1,
      maxRows: 10,
      interfaceName: "ProfileQuotes", // optional
      labels: {
        singular: "Quote",
        plural: "Quotes",
      },
      fields: [
            {
              name: "quoteDate",
              type: "date",
              required: true,
              admin: {
                // width: "10%",                
              },
            },
            {
              name: "quoteText",
              type: "richText",
              required: true,
              admin: {
                // width: "90%",
              },
            },
          ],              
        },        
  ],
};
