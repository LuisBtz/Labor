import React from 'react'
import styled from 'styled-components';


import PostArtistEn from './posts/PostArtistEn'


// markup
const ArtistSectionEn = ({ data }) => {

  return (
    <ArtsitContainer>
      {data.sanityHomePage.artistsHighlights.map(({ name, slug, metaData, id, from, abstract, thumbnail }) => {
        return (
          <PostArtistEn name={name} thumbnail={thumbnail} slug={slug} from={from} metaData={metaData} key={id} abstract={abstract} />
        )
      })}
    </ArtsitContainer>

  )
}

const ArtsitContainer = styled.section`
    display: flex;

    /* Mobile */
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `






export default ArtistSectionEn