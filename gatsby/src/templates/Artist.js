import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/layout/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Modules from "../components/modules/Modules";

// markup
export default function SingleArtistPage({ data: { artist } }) {
  const heroImage = getImage(artist.thumbnail.asset);

  console.log(artist);

  return (
    <Layout>
      <Seo title={artist.seo && artist.seo.es.titleSeo} description={artist.seo && artist.seo.es.pageDescription} image={artist.thumbnail.asset.url} />
      <Hero>
        <GatsbyImage image={heroImage} alt={artist.name} />
      </Hero>
      <Modules editorialModule={artist.editorialModule} />
    </Layout>
  );
}

const Hero = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const query = graphql`
  query($slug: String!) {
    artist: sanityArtists(slug: { current: { eq: $slug } }) {
      name
      thumbnail {
        asset {
          url
          gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
        }
      }
      seo {
        es {
          pageDescription
          titleSeo
        }
      }
      editorialModule {
        ... on SanityFullImage {
          _key
          _type
          inlineFullImage {
            caption {
              es
            }
            alternativeText
            asset {
              gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
            }
          }
        }
        ... on SanityBodyText {
          _key
          _type
          es {
            _rawParagraph
            headline
          }
        }
        ... on SanityCarousel {
          _key
          _type
          addImage {
            alternativeText
            caption {
              es
            }
            asset {
              gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
            }
          }
        }
        ... on SanityColophon {
          _key
          _type
          colophoneText {
            es
          }
          technicalInfo {
            es
          }
        }
        ... on SanityImageTwoColumns {
          _key
          _type
          imageOne {
            alternativeText
            caption {
              es
            }
            asset {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          imageTwo {
            alternativeText
            caption {
              es
            }
            asset {
              gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
            }
          }
        }
        ... on SanityMainHeadline {
          _key
          _type
          buttons {
            es {
              social
              resume
              dossier
              agenda
            }
          }
          textField {
            es
          }
        }
        ... on SanityQuote {
          _key
          _type
          quoteText {
            es
          }
        }
        ... on SanityVideo {
          _key
          _type
          titleCode
        }
        ... on SanityZoom {
          _key
          _type
          imageZoom {
            caption {
              es
            }
            alternativeText
            asset {
              url
            }
          }
        }
        ... on SanityRelatedExhibitions {
          _key
          _type
          relatedExhibitions {
            slug {
              current
            }
            title {
              es
            }
            author
            startDate(formatString: "MMM DD YYYY")
            endDate(formatString: "MMM DD YYYY")
            current
            thumbnailCover {
              asset {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
            }
            id
          }
        }
        ... on SanityRelatedArtists {
          _key
          _type
          relatedArtists {
            id
            name
            thumbnail {
              asset {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
            }
            slug {
              current
            }
            metaData {
              es
            }
            from {
              es
            }
            abstract {
              es
            }
          }
        }
        ... on SanityRelatedNews {
          _key
          _type
          relatedNews {
            title {
              es
            }
            slug {
              current
            }
            metaData {
              es
            }
          }
        }
        ... on SanityRelatedPublications {
          _key
          _type
          relatedPublications {
            title {
              es
            }
            slug {
              current
            }
            metaData {
              es
            }
          }
        }
      }
    }
  }
`;
