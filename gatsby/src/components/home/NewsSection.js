import React from 'react'
import styled from 'styled-components';
import PostNew from './posts/PostNew';

// markup
const NewsSection = ( {data} ) => {


    return (
      <NewsContainer>
        {data.datoCmsHome.newsHighlights.map(({ articleHeadline, metaInfo, slug, id }) => {
                return (
                    <PostNew articleHeadline={articleHeadline} metaInfo={metaInfo} slug={slug} key={id} />
                )
                })}
      </NewsContainer>
      
    )
  }

  const NewsContainer = styled.section`
    display: flex;

  `






  export default NewsSection