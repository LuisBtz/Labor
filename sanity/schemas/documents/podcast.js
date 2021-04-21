export default {
  //
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  icon: () => `🎙`,
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
      name: 'episodeNumber',
      title: 'Episode #',
      type: 'string',
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
      name: 'date',
      title: 'Date',
      type: 'string',
    },
    {
      name: 'dateField',
      title: 'Date Field',
      type: 'date'
    },
    {
      name: 'episodePlayer',
      title: 'Episode Player Code',
      type: 'string',
    },
    {
      name: 'bodyText',
      title: 'Body Text',
      type: 'bodyText',
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
      media: 'thumbnailCover'
    }
  }
}
