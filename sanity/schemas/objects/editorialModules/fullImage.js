export default {
  name: 'fullImage',
  title: 'Full Image',
  type: 'object',
  fields: [
    {
      name: 'fullImageItem',
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
  preview: {
    select: {
      title: 'fullImageItem.alternativeText',
      subtitle: 'fullImageItem.caption',
      media: 'fullImageItem',
    },
  },
}
