import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostPublicationPage from './Post/PostPublicationPage';


// markup
const PublicationPage = ( ) => {


  const dataPublication = useStaticQuery(graphql`
  query  {
            allDatoCmsPublication(filter: {locale: {eq: "es"}}) {
            edges {
            node {
                date
                title
                author
                abstract
                slug
                coverThumbnailImage {
                gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
                }
            }
            }
        }
    }
  `)


    return (
      <PublicationContainer>
          {dataPublication.allDatoCmsPublication.edges.map(({ node }) => {
            return (
                <PostPublicationPage data={node} key={node.id} />
            )
          })}
      </PublicationContainer>
      
    )
  }

  const PublicationContainer = styled.section`
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





  export default PublicationPage