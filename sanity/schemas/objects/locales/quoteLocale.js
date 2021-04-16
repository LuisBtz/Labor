export default {
    name: 'quoteText',
    title: 'Quote Text',
    type: 'object',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    },
    fields: [
      {
        name: 'en',
        title: 'English',
        type: 'text'
      },
      {
        name: 'es',
        title: 'Español',
        type: 'text'
      }
    ]
  }