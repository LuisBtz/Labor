import React from 'react'
import styled from 'styled-components';
import PostCurrentExposition from './post/PostCurrentExposition';


// markup
const CurrentExposition = ( {dataCurrent} ) => {


    return (
      <CurrentExpositionContainer>
          {dataCurrent.allDatoCmsExhibition.edges.map(({ node }) => {
            return (
                <PostCurrentExposition title={node.title} pastCurrentOrFuture={node.pastCurrentOrFuture} date={node.date} author={node.author} date={node.date} slug={node.slug} coverThumbnailImage={node.coverThumbnailImage} key={node.id} />
            )
          })}
      </CurrentExpositionContainer>
      
    )
  }

  const CurrentExpositionContainer = styled.section`
    width: 100%;
  `





  export default CurrentExposition