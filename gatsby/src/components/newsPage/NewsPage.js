import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostNewsPage from './post/PostNewsPage';


// markup
const NewsPage = ( ) => {


  const dataNews = useStaticQuery(graphql`
    query  {
        allDatoCmsNews(filter: {locale: {eq: "es"}}) {
            edges {
                node {
                    coverThumbnailImage {
                        gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
                    }
                    articleHeadline
                    slug
                    meta {
                        createdAt(formatString: "DD/MM/YYYY")
                    }
                }
            }
        }
    }
`)


    return (
      <NewsContainer>
          {dataNews.allDatoCmsNews.edges.map(({ node }) => {
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
        /* Mobile */
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
  `





  export default NewsPage