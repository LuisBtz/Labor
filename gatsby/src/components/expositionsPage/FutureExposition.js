import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostFutureExposition from './post/PostFutureExposition';


// markup
const FutureExposition = ( ) => {


  const dataFuture = useStaticQuery(graphql`
  query  {
        allDatoCmsExhibition(
    filter: {locale: {eq: "es"}, pastCurrentOrFuture: {eq: "Future"}}
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
      <FutureExpositionContainer>
          <p>Exposiciones futuras↓</p>
          <FuturePosts>
            {dataFuture.allDatoCmsExhibition.edges.map(({ node }) => {
                return (
                    <PostFutureExposition data={node} key={node.id} />
                )
            })}
          </FuturePosts>
      </FutureExpositionContainer>
      
    )
  }

  const FutureExpositionContainer = styled.section`
    width: 100%;
  `


const FuturePosts = styled.div`
    display: flex;
`





  export default FutureExposition