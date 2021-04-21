export default {
  //
  name: 'news',
  title: 'News',
  type: 'document',
  icon: () => `📰`,
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
      name: 'dateField',
      title: 'Date Field',
      type: 'date'
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
      name: 'editorialModule',
      title: 'Editorial Modules',
      type: 'editorialModule',
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
