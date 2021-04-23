import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FullImageModuleEn = ( { data } ) => {

  const imageFull = getImage(data.inlineFullImage.asset);  


  return (

    <FullImageWrapper>

        {data.inlineFullImage &&
          (data.inlineFullImage.alternativeText ? 
            <GatsbyImage
              image={imageFull}
              alt={data.inlineFullImage.alternativeText}
          /> 
              : <GatsbyImage
              image={imageFull}
              alt='Labor Image'
          />  )
        }

        {data.inlineFullImage && data.inlineFullImage.caption && data.inlineFullImage.caption.en &&
          (data.inlineFullImage.caption.en ? 
            <p className="detail">{data.inlineFullImage.caption.en}</p>
              : ''  )
        }
      
    </FullImageWrapper>

  )
}

const FullImageWrapper = styled.section`
  p {
    padding: .5rem;
  }
`

export default FullImageModuleEn