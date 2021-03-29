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
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'alternativeText',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) =>
            Rule.required().error(
              'You need to set an alternative text on the "Full Image" editorial module'
            ),
        },
      ],
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
}
