import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { Helmet } from "react-helmet"

import FullImage from '../components/home/FullImage'
import ExhibitionSection from '../components/home/ExhibitionSection'
import ArtistSection from '../components/home/ArtistSection'
import MarqueeSection from "../components/home/MarqueeSection"
import PublicationSection from "../components/home/PublicationSection"
import NewsSection from "../components/home/NewsSection"
import NewsLetter from "../components/home/NewsLetter"

export const data = graphql`
  query  {
    datoCmsHome(
    homeHeroPost: {locale: {eq: "es"}}
    exhibitionsHighlights: {elemMatch: {locale: {eq: "es"}}}
    artistHighlights: {elemMatch: {locale: {eq: "es"}}}
    publicationsHighlights: {elemMatch: {locale: {eq: "es"}}}
    newsHighlights: {elemMatch: {locale: {eq: "es"}}}
  ) {
        homeHeroPost {
          coverThumbnailImage {
            gatsbyImageData(layout: FULL_WIDTH, forceBlurhash: true, width: 1200)
          }
          author
          date
          title
          slug
        }
        exhibitionsHighlights {
          coverThumbnailImage {
            gatsbyImageData(layout: FULL_WIDTH, forceBlurhash: true, width: 1200)
          }
          author
          title
          slug
          date
          metaInfo
          id
        }
        artistHighlights {
          name
          slug
          metaInfo
          id
          from
          abstract
          thumbnailImage {
            gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
          }
        }
        marqueeText
        marqueeLink
        publicationsHighlights {
          title
          date
          abstract
          author
          slug
          metaInfo
          id
          coverThumbnailImage {
            gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
          }
        }
        newsHighlights {
        articleHeadline
        metaInfo
          slug
        }
      }
    }
  ` 


// markup
const IndexPage = ( { data } ) => {
  
  return (
    <Layout>
      <Seo title="Home" />
      <Helmet>
        <script src="https://dreamx.mx/scriptlabor.js" type="text/javascript" />
      </Helmet>
      <FullImage data={data} />
      <ExhibitionSection data={data} />
      <ArtistSection data={data} />
      <MarqueeSection data={data} />
      <PublicationSection data={data} />
      <NewsSection data={data} />
      <NewsLetter />
    </Layout>
    
  )
}

export default IndexPage
