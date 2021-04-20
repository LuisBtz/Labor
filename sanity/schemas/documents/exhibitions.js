import { i18n } from '../documentTranslations'

export default {
  //
  name: 'exhibitions',
  title: 'Exhibitions',
  type: 'document',
  icon: () => `📝`,
  i18n,
  fields: [
    { 
      name: 'title',
      title: 'title',
      type: 'textField',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
      },
    },
    {
      name: 'metaData',
      title: 'Label',
      type: 'metaLocale',
    },
    {
      name: 'thumbnailCover',
      title: 'Cover & Thumbnail Image',
      type: 'image',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'editorialModule',
      title: 'Editorial Modules',
      type: 'editorialModule',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    {
      title: 'Past, Current or Future',
      name: 'current',
      type: 'string',
      options: {
        list: [
          { title: 'Past', value: 'past' },
          { title: 'Current', value: 'current' },
          { title: 'Upcoming', value: 'upcoming' },
        ], // <-- predefined values
      },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'current',
      media: 'thumbnailCover'
    }
  }
}