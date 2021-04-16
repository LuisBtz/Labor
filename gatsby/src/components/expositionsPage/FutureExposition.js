import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostFutureExposition from './post/PostFutureExposition';


// markup
const FutureExposition = () => {


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
      <section id="FuturasTop">
        <p className="caps medium head">Exposiciones futuras <span className="arrow">↓</span></p>
      </section>

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

    #FuturasTop {
      padding-top: 6rem;
    }

    @media screen and (max-width: 768px) {
      #FuturasTop {
        padding-top: 4rem;
      }
    }

    .head {
      padding: 1.25rem;
      border-top: solid 1px #f2f2f2;
    }
  `


const FuturePosts = styled.div`
    display: flex;
    flex-wrap: wrap;
`





export default FutureExposition