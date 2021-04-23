import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PostNewsPageEn from './post/PostNewsPageEn';


// markup
const NewsPageEn = () => {


  const dataNews = useStaticQuery(graphql`
    query  {
      allSanityNews(sort: {fields: dateField, order: DESC}) {
        edges {
          node {
            dateField(formatString: "DD/MM/YYYY")
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
              en
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
          <PostNewsPageEn data={node} key={node.id} />
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
      padding-top: 60px;
    }
  `





export default NewsPageEn