export default {
    name: 'bodyTextLocale',
    title: 'English',
    type: 'object',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    },
    fields: [
      {
        name: 'paragraph',
        title: 'Paragraph',
        type: 'blockModule',
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
      },
    ]
  }