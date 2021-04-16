export default {
    name: 'imageInline',
    type: 'image',
    options: {
      hotspot: true, // <-- Defaults to false
    },
    fields: [
      {
        name: 'caption',
        type: 'captionLocale'
      },
      {
        // Editing this field will be hidden behind an "Edit"-button
        name: 'alternativeText',
        type: 'string',
        title: 'Alternative Text',
      },
    ],
  }