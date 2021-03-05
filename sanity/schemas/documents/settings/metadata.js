export default {
  //
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  icon: () => `🏠`,
  fields: [
    {
      name: 'title',
      title: ' Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: ' General description',
      type: 'text',
    },
  ],
}
