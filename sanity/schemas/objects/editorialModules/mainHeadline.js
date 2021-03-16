export default {
  name: 'mainHeadline',
  title: 'Main Headline',
  type: 'object',
  fields: [
    {
      name: 'textField',
      title: 'Text Field',
      type: 'string',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'object',
      description: 'Only activate or fill the fields you want to show',
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
      ],
    },
  ],
  preview: {
    select: {
      title: 'textField',
    },
  },
}
