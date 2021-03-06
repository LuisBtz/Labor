export default {
    name: 'textAreaLocale',
    title: ' General description',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2 // Defines a grid for the fields and how many columns it should have
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