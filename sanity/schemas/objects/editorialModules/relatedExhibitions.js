export default {
    name: 'relatedExhibitions',
    title: 'Related Exhibitions',
    type: 'object',
    fields: [
      {
        title: 'Related Exhibitions',
        name: 'title',
        type: 'string',
        description: 'This text is only displayed in Sanity'
      },
      {
        name: 'relatedExhibitions',
        title: 'Related Exhibitions',
        type: 'array',
        of: [
          {
            name: 'relatedExhibitions',
            title: 'Related Exhibitions',
            type: 'reference',
            to: [ { type: 'exhibitions'}]
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
}