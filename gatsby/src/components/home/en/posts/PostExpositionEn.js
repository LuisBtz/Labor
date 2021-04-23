import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostExposition = ({ title, author, slug, current, endDate, startDate, thumbnailCover }) => {
  const image = getImage(thumbnailCover.asset);
  const dateStart = startDate;
  const dateEND = endDate;
  const pastCurrentOrFuture = current;

  return (
    <PostExpositionWrapper
      to={`/en/expositions/${slug.current}`}
    >
      <GatsbyImage
        image={image}
        alt={title.en}
      />
      <Text>
        <p className="detail regular">{dateStart} - {dateEND} - {pastCurrentOrFuture}</p>
        <h2 className="black">{title.en}</h2>
        <p className="medium caps"><span className="arrow">↑</span> {author}</p>
      </Text>
    </PostExpositionWrapper>

  )
}

const PostExpositionWrapper = styled(Link)`
width: 50vw;

  :hover  p .arrow {
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
}
`

const Text = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: .5rem 1rem;

  h2 {
    margin: 1rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: var(--headline-3);
      margin: 0.75rem 0 .5rem 0;
    }
  }
`







export default PostExposition