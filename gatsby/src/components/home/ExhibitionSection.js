import React from 'react'
import styled from 'styled-components';


import PostExposition from './posts/PostExposition'


// markup
const ExhibitionSection = ({ data }) => {

  return (
    <ExhibitionContainer>
      {data.sanityHomePage.exhibitionsHighlights.map(({ title, author, slug, startDate, endDate, current, thumbnailCover, id }) => {
        return (
          <PostExposition title={title} author={author} thumbnailCover={thumbnailCover} slug={slug} startDate={startDate} endDate={endDate} current={current} key={id} />
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