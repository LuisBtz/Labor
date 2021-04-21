
export default {
    //
    name: 'privacy',
    title: 'Privacy Policy',
    type: 'document',
    icon: () => `📝`,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'textField',
      },
      {
        name: 'privacyTextEn',
        title: 'Privacy Text English',
        type: 'blockModule',
      },
      {
        name: 'privacyTextEs',
        title: 'Texto de Privacidad Español',
        type: 'blockModule',
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
      }
    }
  }
  