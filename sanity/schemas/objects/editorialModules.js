export default {
  //
  name: 'editorialModule',
  title: 'Editorial Module',
  type: 'array',
  of: [
    {
      name: 'oneColumn',
      title: '1 Column',
      type: 'object',
      fields: [
        {
          name: 'imageVideoOneColumn',
          title: 'Image / Video',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'imageEditorialOneColumn',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'videoLinkEditorialOneColumn',
              title: 'Video Link',
              type: 'string',
            },
          ],
        },
        {
          name: 'bodyOneColumn',
          title: 'Body',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'bodyTextEditorialOneColumn',
              title: 'Body Text',
              type: 'blockModule',
            },
          ],
        },
      ],
    },
    {
      name: 'twoColumn',
      title: '2 Column',
      type: 'object',
      fields: [
        {
          name: 'imageTextTwoColumns',
          title: 'Image + Text',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'imageEditorialTwoColumn',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'textEditorialTwoColumn',
              title: 'Text',
              type: 'string',
            },
            {
              name: 'originalTwoColumns',
              title: 'Reverse',
              type: 'boolean',
            },
          ],
        },
        {
          name: 'imageImageTwoColumns',
          title: 'Image + Image',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'imageOPneTwoColumns',
              title: 'Image 1',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: 'imageTwoTwoColumns',
              title: 'Image 2',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
    {
      name: 'threeColumn',
      title: '3 Column',
      type: 'object',
      fields: [
        {
          name: 'imagesThreeColumns',
          title: 'Image + Image + Image',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'imageOneThreeColumns',
              title: 'Image 1',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: 'imageTwoThreeColumns',
              title: 'Image 2',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
            {
              name: 'imageThreeThreeColumns',
              title: 'Image 2',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
        {
          name: 'textsThreeColumns',
          title: 'Text + Text + Text',
          type: 'object',
          description: 'Make sure to only fill one set of fields',
          fields: [
            {
              name: 'textOneThreeColumns',
              title: 'Text 1',
              type: 'string',
            },
            {
              name: 'textTwoThreeColumns',
              title: 'Text 2',
              type: 'string',
            },
            {
              name: 'textThreeThreeColumns',
              title: 'Text 3',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'addCarousel',
      title: 'Carousel',
      type: 'object',
      fields: [
        {
          name: 'Carousel',
          title: 'Carousel',
          type: 'array',
          of: [
            {
              name: 'imageCarouselEditorial',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                  options: {
                    isHighlighted: true, // <-- make this field easily accessible
                  },
                },
                {
                  // Editing this field will be hidden behind an "Edit"-button
                  name: 'attribution',
                  type: 'string',
                  title: 'Attribution',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
