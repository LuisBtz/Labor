import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostArtistsPage from './post/PostArtistsPage';


// markup
const ArtistsPage = () => {


  const dataArtists = useStaticQuery(graphql`
    query  {
      allSanityArtists(sort: {fields: name, order: ASC}) {
        edges {
          node {
            name
            id
            slug {
              current
            }
            thumbnail {
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
    <ArtistsContainer>
      {dataArtists.allSanityArtists.edges.map(({ node }) => {
        return (
          <PostArtistsPage data={node} key={node.id} />
        )
      })}
    </ArtistsContainer>

  )
}

const ArtistsContainer = styled.section`
  padding-top: 90px;
  background: var(--white);
  display: flex;
  flex-wrap: wrap;

  /* Mobile */
  @media screen and (max-width: 768px) {
    /* flex-direction: column; */
    margin-bottom: 3rem;
    padding-top: 60px;
    /* overflow: hidden; */
  }

  `





export default ArtistsPage