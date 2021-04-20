import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostArtist = ({ name, slug, metaData, from, abstract, thumbnail }) => {
  const image = getImage(thumbnail.asset);

  return (
    <PostArtistWrapper
      to={`/artists/${slug.current}`}
    >
      <GatsbyImage
        image={image}
        alt={name}
      />
      <Text>
        <p className="detail">{metaData.es}</p>
        <h3>{name}</h3>
        <p>{from.es}</p>
        <Abstract>{abstract.es}</Abstract>
      </Text>
    </PostArtistWrapper>

  )
}

const PostArtistWrapper = styled(Link)`
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