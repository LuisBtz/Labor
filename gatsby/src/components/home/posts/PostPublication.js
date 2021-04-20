import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostPublication = ({ title, date, abstract, author, slug, thumbnailCover  }) => {
  const image = getImage(thumbnailCover.asset);

  return (
    <PostPublicationWrapper
      to={`/publications/${slug.current}`}
    >
      <ImageStyle
        image={image}
        alt={title}
      />
      <Text>
        <p className='detail'>{date}</p>
        <h5><span className="arrow">↖</span> {title.es}</h5>
        <p className="caps">{author}</p>
        <Abstract>{abstract.es}</Abstract>
      </Text>
    </PostPublicationWrapper>

  )
}

const PostPublicationWrapper = styled(Link)`
  min-width: 46vw;
  padding-right: 2vw;
  display: flex;

  /* Mobile */
  @media screen and (max-width: 768px) {
    min-width: 100vw;
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
  margin-bottom: 5rem;
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
  margin-top: 25px;
  font-size: 16px;
  text-indent: 2rem;
`






export default PostPublication