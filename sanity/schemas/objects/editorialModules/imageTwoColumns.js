export default {
  name: 'imageTwoColumns',
  title: 'Image / Two Columns',
  type: 'object',
  fields: [
    {
      name: 'imageOne',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption 1',
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
    {
      name: 'imageTwo',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption 2',
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
      title: 'imageOne.alternativeText',
      subtitle: 'imageOne.caption',
      media: 'imageOne',
    },
  },
}
