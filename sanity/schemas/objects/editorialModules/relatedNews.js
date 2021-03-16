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
      name: 'recentNews',
      title: 'Related News',
      type: 'array',
      of: [
        {
          title: 'New',
          name: 'new',
          type: 'reference',
          to: [{ type: 'news' }],
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