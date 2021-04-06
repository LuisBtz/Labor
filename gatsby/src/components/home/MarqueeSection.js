import React from 'react'
import styled from 'styled-components';

// markup
const MarqueeSection = ( {data} ) => {


    return (
      <MarqueeContainer>
        {data.datoCmsHome.marqueeLink ? 
          <a href={data.datoCmsHome.marqueeLink}>
            <p>{data.datoCmsHome.marqueeText}</p>
          </a>
        : 
        <p>{data.datoCmsHome.marqueeText}</p>}
      </MarqueeContainer>
      
    )
  }

  const MarqueeContainer = styled.section`
    background-color: black;
    a {
      color: white;
    }
    p {
      color: white;
    }
  `






  export default MarqueeSection