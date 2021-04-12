import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostCurrentExposition = ( {data } ) => {

  const image = getImage(data.coverThumbnailImage);
  const date = data.date;
  const title = data.title;
  const author = data.author;
  const pastCurrentOrFuture = data.pastCurrentOrFuture;
  const slug = data.slug;

    return (
      <PostExpositionWrapper
        to={`/expositions/${slug}`}
      >
        <GatsbyImage
            image={image}
            />
            <Text>
              <Date>{date} - {pastCurrentOrFuture}</Date>
            <h2>{title}</h2>
            <Author>↖ {author}</Author>
            </Text>
    </PostExpositionWrapper>
      
    )
  }

  const PostExpositionWrapper = styled(Link)`
width: 100%;
`

  const Text = styled.div`
  width: 80%;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
  h2 {
      font-size: 86.29px;
      font-family: var(--bold)
  }

`

const Date = styled.p`
font-size: 16.24px;
`

const Author = styled.p`
    font-size: 39.06px;
`





  export default PostCurrentExposition