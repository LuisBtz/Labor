import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostArtistEn = ({ name, slug, metaData, from, abstract, thumbnail }) => {
  const image = getImage(thumbnail.asset);

  return (
    <PostArtistWrapper
      to={`/en/artists/${slug.current}`}
    >
      <GatsbyImage
        image={image}
        alt={name}
      />
      <Text>
        <p className="detail">{metaData.en}</p>
        <h3>{name}</h3>
        <p>{from.en}</p>
        <Abstract>{abstract.en}</Abstract>
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

    h3 {
      margin: 0.75rem 0 .5rem 0;
    }
  }
`

const Abstract = styled.p`
  margin-top: 2rem;
  text-indent: 2rem;
`






export default PostArtistEn