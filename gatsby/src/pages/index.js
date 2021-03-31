import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FullImage from '../components/home/FullImage'

export const data = graphql`
        query  {
          datoCmsHome {
            homeHeroPost {
              ... on DatoCmsExhibition {
                coverThumbnailImage {
                  gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
                }
                title
                date
                author
              }
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
    </Layout>
    
  )
}

export default IndexPage
