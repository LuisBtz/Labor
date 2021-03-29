import { i18n } from '../documentTranslations'

export default {
  //
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: () => `☎️`,
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: true,
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
          name: 'job',
          title: 'Add member',
          type: 'object',
          fields: [
            {
              name: 'position',
              title: 'Position',
              type: 'string'
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'mail',
              title: 'E-mail',
              type: 'string'
            },
          ]
        }
      ]
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
