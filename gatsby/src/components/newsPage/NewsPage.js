import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostNewsPage from './post/PostNewsPage';


// markup
const NewsPage = () => {


  const dataNews = useStaticQuery(graphql`
    query  {
      allSanityNews {
        edges {
          node {
            _createdAt(formatString: "DD/MM/YYYY")
            id
            slug {
              current
            }
            thumbnailCover {
              asset {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
              }
            }
            title {
              es
            }
          }
        }
      }
    }
`)


  return (
    <NewsContainer>
      {dataNews.allSanityNews.edges.map(({ node }) => {
        return (
          <PostNewsPage data={node} key={node.id} />
        )
      })}
    </NewsContainer>

  )
}

const NewsContainer = styled.section`
        padding-top: 90px;
        background: var(--white);
        display: flex;
        width: 100%;
        flex-wrap: wrap;


        /* Mobile */
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
  `





export default NewsPage