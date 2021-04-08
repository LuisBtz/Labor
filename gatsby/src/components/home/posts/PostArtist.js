import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const PostArtist = ({ name, slug, metaInfo, from, abstract, thumbnailImage }) => {
  const image = getImage(thumbnailImage);

  return (
    <PostArtistWrapper>
      <GatsbyImage
        image={image}
      />
      <Text>
        <p className="detail">{metaInfo}</p>
        <h3>{name}</h3>
        <p>{from}</p>
        <Abstract>{abstract}</Abstract>
      </Text>
    </PostArtistWrapper>

  )
}

const PostArtistWrapper = styled.div`
  width: 33.3333vw;

  /* Mobile */
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

const Text = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: .5rem 1rem;

  h3 {
    margin: .75rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

const Abstract = styled.p`
  margin-top: 2rem;
  text-indent: 2rem;
`






export default PostArtist