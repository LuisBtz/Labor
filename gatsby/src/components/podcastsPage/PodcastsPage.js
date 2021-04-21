import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPodcastsPage from './post/PostPodcastsPage';


// markup
const PodcastsPage = () => {


  const dataPodcasts = useStaticQuery(graphql`
    query  {
        allSanityPodcast(sort: { fields: [episodeNumber], order: DESC }) {
            edges {
              node {
                id
                slug {
                  current
                }
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
    <PodcastsContainer>
      {dataPodcasts.allSanityPodcast.edges.map(({ node }) => {
        return (
          <PostPodcastsPage data={node} key={node.id} />
        )
      })}
    </PodcastsContainer>

  )
}

const PodcastsContainer = styled.section`
    padding-top: 90px;
    background: var(--white);
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      padding-top: 56px;
    }
  `





export default PodcastsPage