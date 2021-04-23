import React from 'react'
import styled from 'styled-components';


import PostExpositionEn from './posts/PostExpositionEn'


// markup
const ExhibitionSection = ({ data }) => {

  return (
    <ExhibitionContainer>
      {data.sanityHomePage.exhibitionsHighlights.map(({ title, author, slug, current, endDate, startDate, thumbnailCover, id }) => {
        return (
          <PostExpositionEn title={title} author={author} current={current} thumbnailCover={thumbnailCover} slug={slug} startDate={startDate} endDate={endDate} key={id} />
        )
      })}
    </ExhibitionContainer>

  )
}

const ExhibitionContainer = styled.section`
    display: flex;

    /* Mobile */
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `






export default ExhibitionSection