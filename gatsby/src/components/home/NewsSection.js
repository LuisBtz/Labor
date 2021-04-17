import React from 'react'
import styled from 'styled-components';
import PostNew from './posts/PostNew';

// markup
const NewsSection = ({ data }) => {


  return (
    <NewsContainer>
      {data.sanityHomePage.recentNews.map(({ title, metaData, slug, id }) => {
        return (
          <PostNew title={title} metaData={metaData} slug={slug} key={id} />
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