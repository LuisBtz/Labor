export default {
    name: 'colophon',
    title: 'colophon',
    type: 'object',
    fields: [
        {
            name: 'colophoneText',
            title: 'Colophone Text',
            type: 'colophoneText'
        },
        {
            name: 'technicalInfo',
            title: 'Technical Information',
            type: 'technicalInfo',
        },
    ],
    preview: {
        select: {
          title: 'colophoneText.en'
        }
      }
}