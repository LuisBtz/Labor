import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostPublicationsPage = ({ data }) => {

  const image = getImage(data.thumbnailCover.asset);
  const date = data.dateField;
  const title = data.title.es;
  const author = data.author;
  const abstract = data.abstract.es;
  const slug = data.slug.current;

  return (
    <PostExpositionWrapper
      to={`/publications/${slug}`}
    >
      <ImageStyle
        image={image}
      />
      <Text>
        <p className='detail'>{date}</p>
        <h5><span className="arrow">↖</span>  {title}</h5>
        <p className="caps">{author}</p>
        <Abstract>{abstract}</Abstract>
      </Text>
    </PostExpositionWrapper>

  )
}

const PostExpositionWrapper = styled(Link)`
  min-width: 46vw;
  padding-right: 2vw;
  display: flex;

  @media screen and (max-width: 1280px) {
    min-width: 60vw;
  }

  @media screen and (max-width: 1040px) {
    min-width: 75vw;
  }
  
  /* Mobile */
  @media screen and (max-width: 768px) {
    min-width: 77vw;
    padding-right: 0;
    flex-direction: column;
  }
`

const ImageStyle = styled(GatsbyImage)`
    width: 50%;

    /* Mobile */
    @media screen and (max-width: 768px) {
      width: 100%;
    }
`

const Text = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: .5rem 1rem;

  h5 {
    margin: 1rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
    width: 100%;
  }
`

const Abstract = styled.p`
  margin-top: 1.5rem;
  font-size: var(--paragraph);
  text-indent: 2rem;
`




export default PostPublicationsPage