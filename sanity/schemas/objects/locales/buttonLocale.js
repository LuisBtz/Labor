export default {
    name: 'buttonLocale',
    title: 'English',
    type: 'object',
    options: {
      collapsible: true, // Makes the whole fieldset collapsible
      collapsed: true, // Defines if the fieldset should be collapsed by default or not
      columns: 1 // Defines a grid for the fields and how many columns it should have
    },
    fields: [
      {
        name: 'social',
        title: 'Activate social media share buttons',
        type: 'boolean',
      },
      {
        name: 'dossier',
        title: 'Dossier',
        type: 'url',
      },
      {
        name: 'resume',
        title: 'Resume',
        type: 'url',
      },
      {
        name: 'agenda',
        title: 'Agenda tu cita',
        type: 'boolean',
      },
    ]
  }