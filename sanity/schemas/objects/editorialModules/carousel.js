export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
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
      caption0: 'addImage[0].imageCarouselEditorial.caption',
      caption1: 'addImage[1].imageCarouselEditorial.caption',
      caption2: 'addImage[2].imageCarouselEditorial.caption',
      caption3: 'addImage[3].imageCarouselEditorial.caption',
    },
    prepare: ({ caption0, caption1, caption2, caption3 }) => {
      const caption = [caption0, caption1, caption2].filter(Boolean)
      const title = authors.length > 0 ? `by ${caption.join(', ')}` : ''
      const hasMoreAuthors = Boolean(caption3)
      return {
        title: hasMoreAuthors ? `${title}…` : title,
      }
    },
  },
}
