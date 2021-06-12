export default {
    name: 'relatedPublications',
    title: 'Related Publications',
    type: 'object',
    fields: [
{
      title: 'Related Publications',
      name: 'title',
      type: 'string',
      description: 'This text is only displayed in Sanity'
    },
    {
      name: 'relatedPublications',
      title: 'Related Publications',
      type: 'array',
      of: [
        {
          name: 'relatedPublications',
          title: 'Related Publications',
          type: 'reference',
          to: [
            {
              type: 'publications',
            },
          ],
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