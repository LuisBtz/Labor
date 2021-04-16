export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      title: 'Carousel',
      name: 'title',
      type: 'string',
      description: 'This text is only displayed in Sanity'
    },
    {
      name: 'addImage',
      title: 'Add Image',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [
        {
          name: 'imageCarouselEditorial',
          title: 'Image',
          type: 'imageCarouselEditorial',
        }
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
