import React from 'react'
import styled from 'styled-components';

const VideoModule = ( { data } ) => {

  return (

      <VideoWrapper dangerouslySetInnerHTML={{
                __html: data.titleCode
      }}/>

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