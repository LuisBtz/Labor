import React from 'react'
import styled from 'styled-components';

import { GatsbyImage, getImage } from "gatsby-plugin-image"


const CarouselModule = ( {data} ) => {

  return (

    <CarouselWrapper>
      {data.addImage.map(({ alternativeText, caption, asset }) => {
        
            const imageCarousel = getImage(asset);  

          return (
            <Item >
              {imageCarousel &&
                (alternativeText ? 
                  <GatsbyImage
                    image={imageCarousel}
                    alt={alternativeText}
                /> 
                : <GatsbyImage
                image={imageCarousel}
                alt='Labor Image'
            /> )
              }

              {caption && caption.es &&
                (caption.es ? 
                  <p>{caption.es}</p>
                : '')
              } 
              
              
            </Item>
          )
        })}
    </CarouselWrapper>

  )
}

const CarouselWrapper = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 5rem auto;
`

const Item = styled.div`
  min-width: 46vw;

  p {
    padding: .5rem;
    max-width: 85%;
  }
`

export default CarouselModule