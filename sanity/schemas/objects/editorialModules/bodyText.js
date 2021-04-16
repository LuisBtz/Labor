export default {
  name: 'bodyText',
  title: 'Body Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'bodyTextLocale'
    },
    {
      name: 'es',
      title: 'Español',
      type: 'bodyTextLocale'
    }
  ],
  preview: {
    select: {
      title: 'en.paragraph',
      subtitle: 'en.headline',
    },
  },
}
