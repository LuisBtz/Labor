import React from 'react'
import styled from 'styled-components';

// markup
const MarqueeSection = ({ data }) => {


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
    overflow: scroll;
    padding: 0 0 .5rem 0;
    margin-bottom: 6rem;
    
    a {
      color: var(--white);
      white-space: nowrap;
    }
    p {
      color: var(--white);
      font-size: var(--jumbo);
      white-space: nowrap;

      animation-name: trnslt;
      animation-iteration-count: infinite;
      animation-duration: 60s;
      animation-timing-function: linear
    }

    @keyframes trnslt {
      0% {
        transform: translateX(50%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    /* Mobile */
    @media screen and (max-width: 768px) {
      p {
        font-size: var(--headline-3);
      }

      margin-bottom: 3rem;
    }
  `






export default MarqueeSection