import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostPastExposition = ({ data }) => {

  const image = getImage(data.thumbnailCover.asset);
  const dateStart = data.startDate;
  const dateEND = data.endDate;
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
        <Date className="caps">{dateStart} - {dateEND} - {pastCurrentOrFuture}</Date>
        <h5>{title}</h5>
        <Author className="caps"><span className="arrow">↑</span> {author}</Author>
      </Text>
    </PostExpositionWrapper>

  )
}

const PostExpositionWrapper = styled(Link)`
    width: 33.33vw;

    @media screen and (max-width: 960px) {
      width: 50vw;
    }

    @media screen and (max-width: 768px) {
      width: 100vw;
    }
  `

const Text = styled.div`
  width: 80%;
  margin-top: 0;
  margin-bottom: 3rem;
  padding: 1rem;
  h5 {
    /* font-size: var(--headline-4); */
    font-family: var(--bold);
    margin: .5rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`

const Date = styled.p`
  font-size: var(--detail);
`

const Author = styled.p`
  font-size: var(--paragraph);
`





export default PostPastExposition