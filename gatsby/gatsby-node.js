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
    // 3. Loop over each artist and create a page for each artist
    data.artists.nodes.forEach((artist) => {
        actions.createPage({
            // url forths new page
            path: `/artists/${artist.slug.current}`,
            component: artistTemplate,
            context: {
                language: 'es',
                slug: artist.slug.current,
            }
        })
    });
}

async function turnPublicationsIntoPages({graphql, actions}) {
    // 1. Get a template for this page
    const publicationTemplate = path.resolve('./src/templates/Publication.js')
    // 2. Query all artists
    const {data} = await graphql(`
        query {
            publications: allSanityPublications {
                nodes {
                  slug {
                    current
                  }
                  title {
                    es
                  }
                }
              }
            }
    `);
    // 3. Loop over each artist and create a page for each artist
    data.publications.nodes.forEach((publication) => {
        actions.createPage({
            // url forths new page
            path: `/publications/${publication.slug.current}`,
            component: publicationTemplate,
            context: {
                language: 'es',
                slug: publication.slug.current,
            }
        })
    });
}

exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Artists
        turnArtistsIntoPages(params),
        // 2. Expositions
        // 3. News
        // 4. Podcasts
        // 5. Publications
        turnPublicationsIntoPages(params)
    ])
    
}