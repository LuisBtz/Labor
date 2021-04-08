import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import CurrentExposition from "../components/expositionsPage/CurrentExposition"


export const dataCurrent = graphql`
    query  {
        allDatoCmsExhibition(
    filter: {locale: {eq: "es"}, pastCurrentOrFuture: {eq: "Current"}}
  ) {
            edges {
            node {
              title
              pastCurrentOrFuture
              date
              author
              slug
              id
              coverThumbnailImage {
                gatsbyImageData(layout: FULL_WIDTH, forceBlurhash: true, width: 1200)
              }
            }
          }
        }
    }
  ` 


// markup
const ExpositionsPage = ( { data } ) => {
  return (
    <Layout>
      <SEO title="Expositions" />
      <CurrentExposition dataCurrent={data} />
    </Layout>
    
  )
}

export default ExpositionsPage;
