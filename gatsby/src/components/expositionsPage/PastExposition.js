import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPastExposition from './post/PostPastExposition';


// markup
const PastExposition = () => {


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
      <p className="caps medium head">Exposiciones pasadas <span className="arrow">↓</span></p>
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
    border-top: solid 1px #f2f2f2;

    .head {
      padding: 1.5rem 1rem;
    }
  `


const PastPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
`





export default PastExposition