import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPastExposition from './post/PostPastExposition';


// markup
const PastExposition = () => {


  const dataPast = useStaticQuery(graphql`
  query  {
    allSanityExhibitions(filter: {current: {eq: "past"}}) {
        edges {
          node {
            title {
              es
            }
            current
            startDate(formatString: "MMM DD YYYY")
            endDate(formatString: "MMM DD YYYY")
            author
            slug {
              current
            }
            id
            thumbnailCover {
              asset {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
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
        {dataPast.allSanityExhibitions.edges.map(({ node }) => {
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