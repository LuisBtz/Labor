import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPublicationsPage from './Post/PostPublicationsPage';


// markup
const PublicationsPage = () => {


  const dataPublication = useStaticQuery(graphql`
  query  {
      allSanityPublications(sort: {fields: dateField, order: DESC}) {
        edges {
          node {
            dateField(formatString: "YYYY")
            title {
              es
            }
            author
            abstract {
              es
            }
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
    <PublicationContainer>
      {dataPublication.allSanityPublications.edges.map(({ node }) => {
        return (
          <PostPublicationsPage data={node} key={node.id} />
        )
      })}
    </PublicationContainer>

  )
}

const PublicationContainer = styled.section`
  padding-top: 90px;
  background: var(--white);
  cursor: ew-resize;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: var(--gutter);
  overflow: scroll;
  margin-bottom: 5rem;

  .gatsby-image-wrapper img {
    height: inherit !important;
    width: 100% !important;
  }


  /* Mobile */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
  `





export default PublicationsPage