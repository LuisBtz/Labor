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


async function turnExhibitionsIntoPages({graphql, actions}) {


  // 1. Get a template for this page
  const exhibitionTemplate = path.resolve('./src/templates/Exhibition.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          exhibitions: allSanityExhibitions {
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
  data.exhibitions.nodes.forEach((exhibition) => {
      actions.createPage({
          // url forths new page
          path: `/expositions/${exhibition.slug.current}`,
          component: exhibitionTemplate,
          context: {
              language: 'es',
              slug: exhibition.slug.current
          }
      })
  });
}


async function turnNewsIntoPages({graphql, actions}) {


  // 1. Get a template for this page
  const newsTemplate = path.resolve('./src/templates/New.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          newsPages: allSanityNews {
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
  data.newsPages.nodes.forEach((newPage) => {
      actions.createPage({
          // url forths new page
          path: `/news/${newPage.slug.current}`,
          component: newsTemplate,
          context: {
              language: 'es',
              slug: newPage.slug.current
          }
      })
  });
}


async function turnPodcastsPages({graphql, actions}) {


  // 1. Get a template for this page
  const podcastTemplate = path.resolve('./src/templates/Podcast.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          podcasts: allSanityPodcast {
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
  data.podcasts.nodes.forEach((podcast) => {
      actions.createPage({
          // url forths new page
          path: `/podcasts/${podcast.slug.current}`,
          component: podcastTemplate,
          context: {
              language: 'es',
              slug: podcast.slug.current
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
        turnExhibitionsIntoPages(params),
        // 3. News
        turnNewsIntoPages(params),
        // 4. Podcasts
        turnPodcastsPages(params),
        // 5. Publications
        turnPublicationsIntoPages(params)
    ])
    
}
