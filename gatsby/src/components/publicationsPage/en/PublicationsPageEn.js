import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPublicationsPageEn from './Post/PostPublicationsPageEn';


// markup
const PublicationsPageEn = () => {


  const dataPublication = useStaticQuery(graphql`
  query  {
      allSanityPublications(sort: {fields: dateField, order: DESC}) {
        edges {
          node {
            dateField(formatString: "YYYY")
            title {
              en
            }
            author
            abstract {
              en
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
          <PostPublicationsPageEn data={node} key={node.id} />
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
    padding-top: 60px;
    flex-direction: column;
    margin-bottom: 3rem;
    grid-template-columns: repeat(1, 1fr);
  }
  `





export default PublicationsPageEn