import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FullImage from '../components/home/FullImage'
import ExhibitionSection from '../components/home/ExhibitionSection'

export const data = graphql`
  query  {
    datoCmsHome(
    homeHeroPost: {locale: {eq: "es"}}
    exhibitionsHighlights: {elemMatch: {locale: {eq: "es"}}}
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
      }
    }
  ` 


// markup
const IndexPage = ( { data } ) => {
  return (
    <Layout>
      <SEO title="Home" />
      <FullImage data={data} />
      <ExhibitionSection data={data} />
    </Layout>
    
  )
}

export default IndexPage
