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
      of: [
        {
          name: 'imageCarouselEditorial',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'alternativeText',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) =>
                Rule.required().error(
                  'You need to set an alternative text on the "Full Image" editorial module'
                ),
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
