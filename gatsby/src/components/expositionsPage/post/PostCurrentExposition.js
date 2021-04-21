import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostCurrentExposition = ({ data }) => {

  const image = getImage(data.thumbnailCover.asset);
  const dateStart = data.startDate;
  const dateEnd = data.endDate;
  const title = data.title.es;
  const author = data.author;
  const pastCurrentOrFuture = data.current;
  const slug = data.slug.current;

  return (
    <PostExpositionWrapper
      to={`/expositions/${slug}`}
    >
      <GatsbyImage
        image={image}
      />
      <Text>
        <Date className="caps">{dateStart} - {dateEnd} - {pastCurrentOrFuture}</Date>
        <h2>{title}</h2>
        <Author className="medium caps"><span className="arrow">↑</span> {author}</Author>
      </Text>
    </PostExpositionWrapper>

  )
}

const PostExpositionWrapper = styled(Link)`
width: 100%;
`

const Text = styled.div`
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding: 1rem;

  h2 {
    font-size: var(--jumbo-xl);
    font-family: var(--bold);
    margin: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
    width: 100%;

    h2 {
      font-size: var(--headline-2);
      word-wrap: break-word;
      hyphens: auto;
      margin: 1rem 0;
    }

    p {
      font-size: var(--detail);
    }

    p.medium {
      font-size: var(--paragraph);
    }
  }

`

const Date = styled.p`
  font-size: var(--paragraph);
`

const Author = styled.p`
    font-size: var(--headline-3);
`


export default PostCurrentExposition