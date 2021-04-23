import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPodcastsPageEn from './post/PostPodcastsPageEn';


// markup
const PodcastsPageEn = () => {


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
          <PostPodcastsPageEn data={node} key={node.id} />
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
      grid-template-columns: repeat(1, 1fr);
      padding-top: 60px;
    }
  `





export default PodcastsPageEn