import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostFutureExpositionEn from './post/PostFutureExposition';


// markup
const FutureExpositionEn = () => {


  const dataFuture = useStaticQuery(graphql`
  query  {
    allSanityExhibitions(filter: {current: {eq: "upcoming"}}, sort: {fields: endDate, order: DESC} ) {
        edges {
          node {
            title {
              en
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

  console.log(dataFuture.allSanityExhibitions.edges)

  return (



    <FutureExpositionContainer>
      {dataFuture.allSanityExhibitions ?
        <section id="FuturasTop">
          <p className="caps medium head">Upcoming Exhibitions <span className="arrow">↓</span></p>
        </section>
        : ''}

      <FuturePosts>
        {dataFuture.allSanityExhibitions.edges.map(({ node }) => {
          return (
            <PostFutureExpositionEn data={node} key={node.id} />
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





export default FutureExpositionEn