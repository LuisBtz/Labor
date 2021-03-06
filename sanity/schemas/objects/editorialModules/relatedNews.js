export default {
    name: 'relatedNews',
    title: 'Related News',
    type: 'object',
    fields: [
{
      title: 'Related News',
      name: 'title',
      type: 'string',
      description: 'This text is only displayed in Sanity'
    },
    {
      name: 'relatedNews',
      title: 'Related News',
      type: 'array',
      of: [
        {
          name: 'relatedNews',
          title: 'Related News',
          type: 'reference',
          to: [  {type: 'news'} ]
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