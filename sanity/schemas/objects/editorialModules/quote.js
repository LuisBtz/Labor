export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'quoteText',
      title: 'Quote Text',
      type: 'quoteText',
    },
  ],
  preview: {
    select: {
      title: 'quoteText.en',
    },
  },
}
