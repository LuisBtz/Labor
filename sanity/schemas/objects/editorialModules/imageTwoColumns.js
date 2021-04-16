export default {
  name: 'imageTwoColumns',
  title: 'Image / Two Columns',
  type: 'object',
  fields: [
    {
      name: 'imageOne',
      title: 'Image 1',
      type: 'imageInline'
    },
    {
      name: 'imageTwo',
      title: 'Image 2',
      type: 'imageInline'
    },
  ],
  preview: {
    select: {
      title: 'imageOne.alternativeText',
      subtitle: 'imageOne.caption.en',
      media: 'imageOne',
    },
  },
}
