import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const PostCurrentExposition = ( {title, pastCurrentOrFuture, date, author, slug, coverThumbnailImage, id } ) => {
  const image = getImage(coverThumbnailImage);

    return (
      <PostExpositionWrapper>
        <GatsbyImage
            image={image}
            />
            <Text>
              <p>{date} - {pastCurrentOrFuture}</p>
            <h2>{title}</h2>
            <p>↖ {author}</p>
            </Text>
    </PostExpositionWrapper>
      
    )
  }

  const PostExpositionWrapper = styled.div`
width: 50vw;
`

  const Text = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
`







  export default PostCurrentExposition