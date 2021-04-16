export default {
  name: 'mainHeadline',
  title: 'Main Headline',
  type: 'object',
  fields: [
    {
      name: 'textField',
      type: 'textField'
    },
    {
      name: 'buttons',
      type: 'buttons'
    }
  ],
  preview: {
    select: {
      title: 'textField.en',
    },
  },
}
