import React from 'react'
import styled from 'styled-components';

// markup
const PostNew = ( { articleHeadline, metaInfo, slug } ) => {

    return (
        <PostNewsWrapper>
            <p>{metaInfo}</p>
            <h2>{articleHeadline}</h2>
        </PostNewsWrapper>
      
    )
  }

  const PostNewsWrapper = styled.div`
  width: 50vw;
`



  export default PostNew