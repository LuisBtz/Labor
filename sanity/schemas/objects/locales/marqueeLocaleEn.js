export default  {
    name: 'marqueeLocaleEn',
    title: 'English',
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
      }
    ]
  }