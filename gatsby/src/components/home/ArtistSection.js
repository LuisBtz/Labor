import React from 'react'
import styled from 'styled-components';


import PostArtist from './posts/PostArtist'


// markup
const ArtistSection = ({ data }) => {

  return (
    <ArtsitContainer>
      {data.datoCmsHome.artistHighlights.map(({ name, slug, metaInfo, id, from, abstract, thumbnailImage }) => {
        return (
          <PostArtist name={name} thumbnailImage={thumbnailImage} slug={slug} from={from} metaInfo={metaInfo} key={id} abstract={abstract} />
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






export default ArtistSection