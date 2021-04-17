
export default {
  //
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: () => `☎️`,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [
        {
          type: 'teamContact' 
        },
      ],
    },
    {
      name: 'horario',
      title: 'Horario',
      type: 'blockModule'
    },
    {
      name: 'mapCode',
      title: 'Map Code',
      type: 'string'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
  initialValue: {
    title: 'Contact',
  },
}
