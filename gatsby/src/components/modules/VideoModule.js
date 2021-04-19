import React from 'react'
import styled from 'styled-components';

const VideoModule = () => {

    return (

      <VideoWrapper>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r79agtknbJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        
      </VideoWrapper>
  
    )
  }

const VideoWrapper = styled.section``

export default VideoModule