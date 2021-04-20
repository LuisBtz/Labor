export default {
    name: 'zoom',
    title: 'Image Zoom',
    type: 'object',
    fields: [
      {
        title: 'ImageZoom',
        name: 'imageZoom',
        type: 'inlineFullImage',
      },
    ],
    preview: {
      select: {
        title: 'imageZoom.alternativeText',
        subtitle: 'imageZoom.caption.en',
        media: 'imageZoom',
      },
    },
  }