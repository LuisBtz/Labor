import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const PostArtist = ( {name, slug, metaInfo, from, abstract, thumbnailImage } ) => {
  const image = getImage(thumbnailImage);

    return (
      <PostArtistWrapper>
        <GatsbyImage
            image={image}
            />
            <Text>
              <p>{metaInfo}</p>
            <h2>{name}</h2>
            <p>{from}</p>
            <Abstract>{abstract}</Abstract>
            </Text>
    </PostArtistWrapper>
      
    )
  }

  const PostArtistWrapper = styled.div`
  width: 33.3333vw;
`

  const Text = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
`

const Abstract = styled.p`
margin-top: 25px;
`






  export default PostArtist