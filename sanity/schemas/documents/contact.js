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
      name: 'adress',
      title: 'Adresss',
      type: 'string',
    },
    {
      title: 'Phone Numbers',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Emails',
      name: 'emails',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
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
