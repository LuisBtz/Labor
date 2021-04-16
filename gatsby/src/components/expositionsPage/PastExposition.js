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
      <section id="PasadasTop">
        <p className="caps medium head">Exposiciones pasadas <span className="arrow">↓</span></p>
      </section>

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

    #PasadasTop {
      padding-top: 6rem;
    }

    @media screen and (max-width: 768px) {
      #PasadasTop {
        padding-top: 4rem;
      }
    }

    .head {
      padding: 1.25rem;
      border-top: solid 1px #f2f2f2;
    }
  `


const PastPosts = styled.div`
    display: flex;
    flex-wrap: wrap;
`





export default PastExposition