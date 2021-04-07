import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const PostPublication = ( {title, date, author, slug, abstract, coverThumbnailImage } ) => {
  const image = getImage(coverThumbnailImage);

    return (
      <PostPublicationWrapper>
        <ImageStyle
            image={image}
            />
            <Text>
                <p className='date'>{date}</p>
                <h3>{title}</h3>
                <h4>{author}</h4>
                <Abstract>{abstract}</Abstract>
            </Text>
    </PostPublicationWrapper>
      
    )
  }

  const PostPublicationWrapper = styled.div`
  width: 50vw;
  display: flex;
`
const ImageStyle = styled(GatsbyImage)`
    width: 50%;
`

  const Text = styled.div`
  width: 50%;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
  h3 {
      font-size: 25px;
  }
  .date {
      font-size: 10.24px;
  }
`

const Abstract = styled.p`
margin-top: 25px;
font-size: 16px;
`






  export default PostPublication