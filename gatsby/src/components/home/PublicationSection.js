import React from 'react'
import styled from 'styled-components';
import PostPublication from './posts/PostPublication';

// markup
const PublicationSection = ({ data }) => {


  return (
    <PublicationContainer>
      {data.datoCmsHome.publicationsHighlights.map(({ title, date, author, slug, abstract, coverThumbnailImage, id }) => {
        return (
          <PostPublication title={title} coverThumbnailImage={coverThumbnailImage} slug={slug} date={date} author={author} key={id} abstract={abstract} />
        )
      })}
    </PublicationContainer>
  )
}

const PublicationContainer = styled.section`
    cursor: ew-resize;
    display: flex;
    overflow: scroll;
    margin-bottom: 5rem;

    /* Mobile */
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 3rem;
    }
  `






export default PublicationSection