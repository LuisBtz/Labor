import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPastExposition from './post/PostPastExposition';


// markup
const PastExposition = ( ) => {


  const dataPast = useStaticQuery(graphql`
  query  {
        allDatoCmsExhibition(
    filter: {locale: {eq: "es"}, pastCurrentOrFuture: {eq: "Past"}}
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
      <PastExpositionContainer>
          <p>Exposiciones pasadas↓</p>
          <PastPosts>
            {dataPast.allDatoCmsExhibition.edges.map(({ node }) => {
                return (
                    <PostPastExposition data={node} key={node.id} />
                )
            })}
          </PastPosts>
      </PastExpositionContainer>
      
    )
  }

  const PastExpositionContainer = styled.section`
    width: 100%;
  `


const PastPosts = styled.div`
    display: flex;
`





  export default PastExposition