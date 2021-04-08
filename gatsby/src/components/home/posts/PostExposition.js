import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const PostExposition = ({ title, author, coverThumbnailImage, date, metaInfo, slug }) => {
  const image = getImage(coverThumbnailImage);

  return (
    <PostExpositionWrapper>
      <GatsbyImage
        image={image}
      />
      <Text>
        <p className="detail regular">{metaInfo} - {date}</p>
        <h2 className="black">{title}</h2>
        <p className="medium caps">↖ {author}</p>
      </Text>
    </PostExpositionWrapper>

  )
}

const PostExpositionWrapper = styled.div`
width: 50vw;

/* Mobile */
@media screen and (max-width: 768px) {
  width: 100vw;
}
`

const Text = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: .5rem 1rem;

  h2 {
    margin: 16px 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: var(--headline-3);
    }
  }
`







export default PostExposition