export default {
    name: 'newsArticleHeader',
    title: 'News Article Header',
    type: 'object',
    fields: [
        {
          name: 'cover',
          type: 'imageInline'
        },
        {
            name: 'headlineText',
            title: 'Headline Text',
            type: 'textField',
        },
    ],
    preview: {
        select: {
          title: 'headlineText.en',
          media: 'cover'
        },
      },
}