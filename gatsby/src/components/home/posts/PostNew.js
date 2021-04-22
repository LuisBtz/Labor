import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

// markup
const PostNew = ({ title, metaData, slug }) => {

  return (
    <PostNewsWrapper
      to={`/news/${slug.current}`}
    >
      <p class="detail">{metaData.es}</p>
      <h2><span className="arrow">→</span> {title.es}</h2>
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

  h2:hover .arrow {
    animation: blink .5s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
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