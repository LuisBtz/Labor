export default {
  name: 'fullImage',
  title: 'Full Image',
  type: 'object',
  fields: [
    {
      title: 'Inline Full Image',
      name: 'inlineFullImage',
      type: 'inlineFullImage',
    },
  ],
  preview: {
    select: {
      title: 'inlineFullImage.alternativeText',
      subtitle: 'inlineFullImage.caption.en',
      media: 'inlineFullImage',
    },
  },
}
