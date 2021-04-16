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
      name: 'recentExhibitions',
      title: 'Related Exhibitions',
      type: 'array',
      of: [
        {
          type: 'exhibitionH',
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