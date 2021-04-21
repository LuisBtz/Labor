import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostCurrentExposition from './post/PostCurrentExposition';


// markup
const CurrentExposition = () => {

  
  const dataCurrent = useStaticQuery(graphql`
  query  {
      allSanityExhibitions(filter: {current: {eq: "current"}}) {
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
    <CurrentExpositionContainer>
      <section id="ActualTop">
        <p className="caps medium head"></p>
      </section>

      {dataCurrent.allSanityExhibitions.edges.slice(0, 1).map(({ node }) => {
        return (
          <PostCurrentExposition data={node} key={node.id} />
        )
      })}

      <section id="anchors">
        <a href="#ActualTop" id="actual"><span className="arrow">→</span> Exposición Actual</a>
        <a href="#FuturasTop" id="futuras"><span className="arrow">→</span> Futuras</a>
        <a href="#PasadasTop" id="pasadas"><span className="arrow">→</span> Pasadas</a>
      </section>
    </CurrentExpositionContainer>
  )
}

const CurrentExpositionContainer = styled.section`
  width: 100%;
  overflow: hidden;

  #anchors {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1010;
    background: white;
    border-top: solid 1px black;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }

      a {
        padding: 0 .75rem;
        text-transform: uppercase;
        font-size: var(--small);

        .arrow {
          display: none;
        }

        :hover {
          font-family: var(--bold);
        }
      }

      .active {
        font-family: var(--bold);
      }

      .active .arrow {
        display: inline;
      }
  }
`





export default CurrentExposition