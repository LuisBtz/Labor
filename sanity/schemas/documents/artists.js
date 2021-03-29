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
