import { graphql } from 'gatsby'
import React from 'react'
import LayoutEn from '../../components/layout/en/layoutEn'
import Seo from '../../components/layout/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import ModulesEn from '../../components/modules/en/ModulesEn'


// markup
export default function SingleExhibitionPage({ data: { exhibition } }) {
  const heroImage = getImage(exhibition.thumbnailCover.asset);


  return (
    <LayoutEn>
      <Seo title={exhibition.seo && exhibition.seo.en.titleSeo} description={exhibition.seo && exhibition.seo.en.pageDescription} image={exhibition.thumbnailCover.asset.url} />
      <Hero>
        <GatsbyImage
          image={heroImage}
          alt={exhibition.title.en}
        />
      </Hero>
      <ModulesEn editorialModule={exhibition.editorialModule} />
    </LayoutEn>

  )
}

const Hero = styled.div`
display: block;

@media screen and (max-width: 768px) {
    padding-top: 60px ;
  }
`


export const query = graphql`
    query($slug: String!){
        exhibition: sanityExhibitions(slug: {
		current: {eq: $slug} }){
            title {
                en
            }
            thumbnailCover {
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
            ... on SanityRelatedExhibitions {
          _key
          _type
          relatedExhibitions {
            slug {
              current
            }
            title {
              en
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
              en
            }
            from {
              en
            }
            abstract {
              en
            }
          }
        }
        ... on SanityRelatedNews {
          _key
          _type
          relatedNews {
            title {
              en
            }
            slug {
              current
            }
            metaData {
              en
            }
          }
        }
        ... on SanityRelatedPublications {
          _key
          _type
          relatedPublications {
            title {
              en
            }
            slug {
              current
            }
            metaData {
              en
            }
          }
        }
            }
        }
    }
`



