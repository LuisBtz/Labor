import React from 'react'
import styled from 'styled-components';

// markup
const MarqueeSectionEn = ({ data }) => {


  return (
    <MarqueeContainer>
      {data.sanityHomePage.marquee.en.url ?
        <a target='_blank' rel="noreferrer" href={data.sanityHomePage.marquee.en.url}>
          <p>{data.sanityHomePage.marquee.en.marqueeText}</p>
        </a>
        :
        <p>{data.sanityHomePage.marquee.en.marqueeText}</p>}
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
      text-transform: uppercase;
    }
    p {
      color: var(--white);
      font-size: var(--jumbo);
      white-space: nowrap;
      text-transform: uppercase;

      animation-name: trnslt;
      animation-iteration-count: infinite;
      animation-duration: 20s;
      animation-timing-function: linear
    }

    @keyframes trnslt {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    /* Mobile */
    @media screen and (max-width: 768px) {
      p {
        font-size: var(--headline-3);
        animation-duration: 20s;
      }

      margin-bottom: 3rem;
    }
  `






export default MarqueeSectionEn