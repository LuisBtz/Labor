import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostCurrentExposition from './post/PostCurrentExposition';


// markup
const CurrentExposition = () => {


  const dataCurrent = useStaticQuery(graphql`
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
  `)


  return (
    <CurrentExpositionContainer>
      {dataCurrent.allDatoCmsExhibition.edges.slice(0, 1).map(({ node }) => {
        return (
          <PostCurrentExposition data={node} key={node.id} />
        )
      })}
    </CurrentExpositionContainer>

  )
}

const CurrentExpositionContainer = styled.section`
    width: 100%;
    overflow: hidden;
  `





export default CurrentExposition