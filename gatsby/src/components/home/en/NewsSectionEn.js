import React from 'react'
import styled from 'styled-components';
import PostNewEn from './posts/PostNewEn';

// markup
const NewsSection = ({ data }) => {


  return (
    <NewsContainer>
      {data.sanityHomePage.recentNews.map(({ title, metaData, slug, id }) => {
        return (
          <PostNewEn title={title} metaData={metaData} slug={slug} key={id} />
        )
      })}
    </NewsContainer>

  )
}

const NewsContainer = styled.section`
    display: flex;

    /* Mobile */
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `






export default NewsSection