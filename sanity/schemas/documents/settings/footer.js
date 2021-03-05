export default {
  //
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: () => `🏠`,
  fields: [
    {
      name: 'title',
      title: ' Site Title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'array',
          of: [
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    title: 'Footer',
  },
}
