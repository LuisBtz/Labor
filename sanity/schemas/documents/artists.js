import { i18n } from '../documentTranslations'

export default {
  //
  name: 'artists',
  title: 'Artists',
  type: 'document',
  icon: () => `👩🏻‍🎨`,
  i18n,
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
      name: 'thumbnail',
      title: 'Thumbnail Image',
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
