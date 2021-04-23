import { graphql } from "gatsby";
import React from "react";
import LayoutEn from "../../components/layout/en/layoutEn";
import Seo from "../../components/layout/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
// import Modules from "../components/modules/Modules";

// markup
export default function SingleArtistPage({ data: { artist } }) {
  const heroImage = getImage(artist.thumbnail.asset);

  console.log(artist);

  return (
    <LayoutEn>
      <Seo title={artist.seo.en && artist.seo.en.titleSeo} description={artist.seo.en && artist.seo.en.pageDescription} image={artist.thumbnail.asset.url} />
      <Hero>
        <GatsbyImage image={heroImage} alt={artist.name} />
      </Hero>
      {/* <Modules editorialModule={artist.editorialModule} /> */}
    </LayoutEn>
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
        en {
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
              en
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
          en {
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
              en
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
            en
          }
          technicalInfo {
            en
          }
        }
        ... on SanityImageTwoColumns {
          _key
          _type
          imageOne {
            alternativeText
            caption {
              en
            }
            asset {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          imageTwo {
            alternativeText
            caption {
              en
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
            en {
              social
              resume
              dossier
              agenda
            }
          }
          textField {
            en
          }
        }
        ... on SanityQuote {
          _key
          _type
          quoteText {
            en
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
              en
            }
            alternativeText
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
