import React from 'react'
import styled from 'styled-components';
import {
  GlassMagnifier,
} from "react-image-magnifiers";

const ZoomModule = ( { data } ) => {

  const imageZoomData = data.imageZoom.asset.url

  return (

    <ZoomWrapper>
      {data.imageZoom &&
              (data.imageZoom.alternativeText ? 
                <GlassMagnifier
                  imageSrc={imageZoomData}
                  imageAlt={data.imageZoom.alternativeText}
                  largeImageSrc={imageZoomData}
                  magnifierBorderSize='0'
                  square='true'
                  magnifierSize="35%"
                />
                  : <GlassMagnifier
                  imageSrc={imageZoomData}
                  imageAlt='Labor Image'
                  largeImageSrc={imageZoomData}
                  magnifierBorderSize='0'
                  square='true'
                  magnifierSize="35%"
                />  )
            }

    </ZoomWrapper>

  )
}

const ZoomWrapper = styled.section``

export default ZoomModule