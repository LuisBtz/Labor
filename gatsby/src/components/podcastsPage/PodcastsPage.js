import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPodcastsPage from './post/PostPodcastsPage';


// markup
const PodcastsPage = () => {


  const dataPodcasts = useStaticQuery(graphql`
    query  {
        allDatoCmsPodcast(filter: {locale: {eq: "es"}}) {
            edges {
                node {
                    coverThumbnailImage {
                        gatsbyImageData(layout: FULL_WIDTH, width: 700, forceBlurhash: true)
                        }
                        slug
                        id
                    }
                }
            }
        }
`)


  return (
    <PodcastsContainer>
      {dataPodcasts.allDatoCmsPodcast.edges.map(({ node }) => {
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
    }
  `





export default PodcastsPage