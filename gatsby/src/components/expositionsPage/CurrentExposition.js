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
      <section id="ActualTop">
        <p className="caps medium head"></p>
      </section>

      {dataCurrent.allDatoCmsExhibition.edges.slice(0, 1).map(({ node }) => {
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