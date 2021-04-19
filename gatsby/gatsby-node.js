const path = require('path');

async function turnArtistsIntoPages({graphql, actions}) {
    // 1. Get a template for this page
    const artistTemplate = path.resolve('./src/templates/Artist.js')
    // 2. Query all artists
    const {data} = await graphql(`
        query {
            artists: allSanityArtists {
                nodes {
                  name
                  slug {
                    current
                  }
                }
            }
        }
    `);
    console.log(data)
    // 3. Loop over each artist and create a page for each artist
    data.artists.nodes.forEach((artist) => {
        actions.createPage({
            // url forths new page
            path: `artists/${artist.slug.current}`,
            component: artistTemplate,
            context: {
                language: 'es',
                slug: artist.slug.current,
            }
        })
    });
}

exports.createPages = async (params) => {
    // Create Pages dynamically
    // 1. Artists
    await turnArtistsIntoPages(params)
    // 2. Expositions
    // 3. News
    // 4. Podcasts
    // 5. Publications
}