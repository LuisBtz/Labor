export default {
    name: 'teamContact',
    title: 'Quote',
    type: 'object',
    fields: [
            {
                name: 'position',
                title: 'Position',
                type: 'positionLocale',
            },
            {
                name: 'name',
                title: 'Name',
                type: 'string',
            },
            {
                name: 'email',
                title: 'E-mail',
                type: 'string',
            }
      
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'position.en'
      },
    },
  }
  