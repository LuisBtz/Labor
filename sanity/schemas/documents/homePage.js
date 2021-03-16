import { i18n } from '../documentTranslations'

export default {
  //
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: () => `🏠`,
  i18n,
  fields: [
    {
      name: 'title',
      title: ' Site Title',
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
    // {
    //   name: 'promo',
    //   title: 'Promo Banner',
    //   type: 'object',
    //   collapsible: true,
    //   fields: [
    //     {
    //       name: 'file',
    //       title: 'Image or video',
    //       type: 'file',
    //     },
    //     {
    //       name: 'headline',
    //       title: 'Headline',
    //       type: 'string',
    //     },
    //     {
    //       name: 'subHeadline',
    //       title: 'Sub headeline',
    //       type: 'string',
    //     },
    //     {
    //       name: 'textButtonBanner',
    //       title: 'Button Text',
    //       type: 'string',
    //     },
    //     {
    //       name: 'urlBanner',
    //       title: 'Button Url',
    //       type: 'url',
    //     },
    //   ],
    // },
    {
      name: 'exhibitionsHF',
      title: 'Exhibition Highlights Full',
      type: 'reference',
      to: [{ type: 'exhibitions' }],
    },
    {
      name: 'exhibitionsHighlights',
      title: 'Exhibition Highlights',
      type: 'array',
      of: [
        {
          title: 'Exhibitions hihlight',
          name: 'exhibitionH',
          type: 'reference',
          to: [{ type: 'exhibitions' }],
        },
      ],
    },
    {
      name: 'artistsHighlights',
      title: 'Artist Highlights',
      type: 'array',
      of: [
        {
          title: 'Artist hihlight',
          name: 'artistH',
          type: 'reference',
          to: [{ type: 'artists' }],
        },
      ],
    },
    {
      name: 'marquee',
      title: 'Marquee',
      type: 'object',
      fields: [
        {
          name: 'marqueeText',
          title: 'Marquee Text',
          type: 'text',
        },
        {
          name: 'url',
          title: 'Url',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https'],
            }),
        },
        {
          name: 'openTab',
          title: 'Open in a new tab',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'publicationHighlights',
      title: 'Publication Highlights',
      type: 'array',
      of: [
        {
          title: 'Publication hihlight',
          name: 'artistH',
          type: 'reference',
          to: [{ type: 'publications' }],
        },
      ],
    },
    {
      name: 'recentNews',
      title: 'Recent News',
      type: 'array',
      of: [
        {
          title: 'New',
          name: 'new',
          type: 'reference',
          to: [{ type: 'news' }],
        },
      ],
    },
    {
      name: 'editorialModule',
      title: 'Editorial Module',
      type: 'editorialModule',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seoModule',
    },
  ],
}
