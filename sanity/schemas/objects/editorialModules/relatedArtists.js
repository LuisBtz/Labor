export default {
    name: 'relatedArtists',
    title: 'Related Artists',
    type: 'object',
    fields: [
{
      title: 'Related Artists',
      name: 'title',
      type: 'string',
      description: 'This text is only displayed in Sanity'
    },
    {
      name: 'relatedArtists',
      title: 'Related Artists',
      type: 'array',
      of: [
        {
          name: 'relatedArtists',
          title: 'Related Artists',
          type: 'reference',
          to: [ { type: 'artists' } ]
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
