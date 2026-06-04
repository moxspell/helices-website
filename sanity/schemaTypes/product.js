export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: 'downloadFile',
      title: 'Download File',
      type: 'file',
    },
    {
      name: 'downloadLabel',
      title: 'Download Button Text',
      type: 'string',
    },
  ],
}