export default {
  //
  name: 'publications',
  title: 'Publications',
  type: 'document',
  icon: () => `✏️`,
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
      title: 'Meta',
      type: 'metaLocale',
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'abstractLocale',
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
      name: 'dateField',
      title: 'Date Field',
      type: 'date'
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
      subtitle: 'author',
      media: 'thumbnailCover'
    }
  }
}
