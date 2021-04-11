import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostArtistsPage from './post/PostArtistsPage';


// markup
const ArtistsPage = ( ) => {


  const dataArtists = useStaticQuery(graphql`
    query  {
        allDatoCmsArtist(filter: {locale: {eq: "es"}}) {
            edges {
                node {
                    name
                    id
                    slug
                    thumbnailImage {
                    gatsbyImageData(layout: FULL_WIDTH, width: 500, forceBlurhash: true)
                    }
                }
            }
        }
    }
`)


    return (
      <ArtistsContainer>
          {dataArtists.allDatoCmsArtist.edges.map(({ node }) => {
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
        cursor: ew-resize;
        display: flex;
        overflow: scroll;
        margin-bottom: 5rem;

        /* Mobile */
        @media screen and (max-width: 768px) {
          flex-direction: column;
          margin-bottom: 3rem;
        }
  `





  export default ArtistsPage