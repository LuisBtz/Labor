export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'quoteText',
      title: 'Quote Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'quoteText',
    },
  },
}
