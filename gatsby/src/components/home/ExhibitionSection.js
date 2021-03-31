import React from 'react'
import styled from 'styled-components';


import PostExposition from './posts/PostExposition'


// markup
const ExhibitionSection = ( {data} ) => {

    return (
      <ExhibitionContainer>
        {data.datoCmsHome.exhibitionsHighlights.map(({ title, author, coverThumbnailImage, date, metaInfo, slug, id}) => {
                return (
                    <PostExposition title={title} author={author} coverThumbnailImage={coverThumbnailImage} slug={slug} date={date} metaInfo={metaInfo} key={id} />
                )
                })}
      </ExhibitionContainer>
      
    )
  }

  const ExhibitionContainer = styled.section`
    display: flex;
  `






  export default ExhibitionSection