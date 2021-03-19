import { i18n } from '../documentTranslations'

export default {
  //
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  icon: () => `🎙`,
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Episode Title',
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
      name: 'episodeNumber',
      title: 'Episode #',
      type: 'string',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'episodePlayer',
      title: 'Episode Player Code',
      type: 'string',
    },
    {
      name: 'episodeDetails',
      title: 'Episode Details',
      type: 'blockModule',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
}
