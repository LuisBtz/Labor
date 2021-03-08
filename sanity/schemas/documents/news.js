import { i18n } from '../documentTranslations'

export default {
  //
  name: 'news',
  title: 'News',
  type: 'document',
  icon: () => `📰`,
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Article Headline',
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
      name: 'editorialModule',
      title: 'Bio',
      type: 'editorialModule',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
}
