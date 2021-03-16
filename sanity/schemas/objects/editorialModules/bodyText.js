export default {
  name: 'bodyText',
  title: 'Body Text',
  type: 'object',
  fields: [
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'paragraph',
      subtitle: 'headline',
    },
  },
}
