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
      name: 'thumbnailCover',
      title: 'Cover & Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'editorialModule',
      title: 'Bio',
      type: 'editorialModule',
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
}
