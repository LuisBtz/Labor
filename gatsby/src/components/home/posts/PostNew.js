import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

// markup
const PostNew = ({ articleHeadline, metaInfo, slug }) => {

  return (
    <PostNewsWrapper
      to={`/news/${slug}`}
    >
      <p class="detail">{metaInfo}</p>
      <h2><span className="arrow">→</span> {articleHeadline}</h2>
    </PostNewsWrapper>
  )
}

const PostNewsWrapper = styled(Link)`
  width: 50vw;
  padding: 1rem;
  margin-bottom: 5rem;

  h2 {
    margin: 1rem 0;
    max-width: 95%;
  }

  /* Mobile */ 
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
    margin-bottom: 0;
    box-sizing: border-box;

    h2 {
      font-size: var(--headline-4);
    }
  }
`



export default PostNew