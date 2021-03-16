export default {
    name: 'newsArticleHeader',
    title: 'News Article Header',
    type: 'object',
    fields: [
        {
            name: 'cover',
            title: 'Cover Image',
            type: 'image',
            options: {
                    hotspot: true, // <-- Defaults to false
                },
        },
        {
            name: 'headlineText',
            title: 'Headline Text',
            type: 'string'
        },
    ],
}