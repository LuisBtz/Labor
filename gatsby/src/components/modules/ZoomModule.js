import React from 'react'
import styled from 'styled-components';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

const ZoomModule = () => {

    return (

      <ZoomWrapper>
          <GlassMagnifier
            imageSrc="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            imageAlt="Example"
            largeImageSrc="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" // Optional
            magnifierBorderSize='0'
            square='true'
            />
        
        
      </ZoomWrapper>
  
    )
  }

const ZoomWrapper = styled.section``

  export default ZoomModule