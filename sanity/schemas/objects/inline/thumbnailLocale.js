export default {
    name: 'thumbnailLocale',
    title: 'Thumbnail Image',
    type: 'image',
    options: {
      hotspot: true, // <-- Defaults to false
    },
    fields: [
      {
        name: 'caption',
        type: 'captionLocale',
        title: 'Caption',
      },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'alternativeText',
        type: 'string',
        title: 'Alternative Text',
        validation: (Rule) =>
          Rule.required().error(
            'You need to set an alternative text on the "Full Image" editorial module'
          ),
      },
    ],
  }