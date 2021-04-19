export default {
  //
  name: 'artists',
  title: 'Artists',
  type: 'document',
  icon: () => `👩🏻‍🎨`,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'metaData',
      title: 'Label',
      type: 'metaLocale',
    },
    {
      name: 'from',
      title: 'From',
      type: 'fromLocale',
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'abstractLocale',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
    },
    
    {
      name: 'editorialModule',
      title: 'Editorial Modules',
      type: 'editorialModule',
    },
    {
      name: 'publicationsModule',
      title: 'Publications',
      type: 'array',
      of: [
        {
          title: 'Publications',
          name: 'publications',
          type: 'reference',
          to: [{ type: 'publications' }],
        },
      ],
    },

    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
}
