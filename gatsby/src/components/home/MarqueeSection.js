import React from 'react'
import styled from 'styled-components';

// markup
const MarqueeSection = ({ data }) => {


  return (
    <MarqueeContainer>
      {data.sanityHomePage.marquee.es.url ?
        <a target='_blank' rel="noreferrer" href={data.sanityHomePage.marquee.es.url}>
          <p>{data.sanityHomePage.marquee.es.marqueeText}</p>
        </a>
        :
        <p>{data.sanityHomePage.marquee.es.marqueeText}</p>}
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
      width: 1000%;
      overflow: hidden;

      animation-name: trnslt;
      animation-iteration-count: infinite;
      animation-duration: 28s;
      animation-timing-function: linear;
      /* animation-direction: alternate; */
    }

    @keyframes trnslt {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-25%);
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






export default MarqueeSection