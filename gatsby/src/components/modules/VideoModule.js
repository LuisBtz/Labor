import React from 'react'
import styled from 'styled-components';

const VideoModule = () => {

  return (

    <VideoWrapper>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/r79agtknbJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </VideoWrapper>

  )
}

const VideoWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin: 5rem auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default VideoModule