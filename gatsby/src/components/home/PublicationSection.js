import React from 'react'
import styled from 'styled-components';
import PostPublication from './posts/PostPublication';

// markup
const PublicationSection = ({ data }) => {
  // (function () {
  //   var follower, init, mouseX, mouseY, positionElement, timer;

  //   follower = document.getElementById('follower');

  //   mouseX = (event) => {
  //     return event.clientX;
  //   };

  //   mouseY = (event) => {
  //     return event.clientY;
  //   };

  //   positionElement = (event) => {
  //     var mouse;
  //     mouse = {
  //       x: mouseX(event),
  //       y: mouseY(event)
  //     };

  //     follower.style.top = mouse.y + 'px';
  //     return follower.style.left = mouse.x + 'px';
  //   };

  //   timer = false;

  //   window.onmousemove = init = (event) => {
  //     var _event;
  //     _event = event;
  //     return timer = setTimeout(() => {
  //       return positionElement(_event);
  //     }, 1);
  //   };

  // }).call(this);


  return (
    <PublicationContainer>
      <section id="follower">
        <svg width="81" height="20" viewBox="0 0 81 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.25" y="0.25" width="80.5" height="19.5" rx="3.75" fill="white" />
          <path d="M13.9904 10.7539L13.9802 10.0781H9.47456L11.3485 8.19392L10.8774 7.72288L8.18432 10.416L10.8774 13.1091L11.3485 12.6381L9.47456 10.7539H13.9904Z" fill="black" />
          <path d="M22.2563 14.1434C24.0483 14.1434 24.8778 13.232 24.8778 12.1158C24.8778 10.5082 23.5978 10.2214 22.5021 9.91424C21.6522 9.67872 20.8432 9.40224 20.8432 8.54208C20.8432 7.93792 21.3552 7.45664 22.3382 7.45664C23.3213 7.45664 23.9254 7.94816 23.9971 8.92096H24.9699C24.8573 7.50784 23.9971 6.61696 22.3382 6.61696C20.8125 6.61696 19.9011 7.36448 19.9011 8.5216C19.9011 10.0269 21.007 10.416 22.0413 10.7437C23.1267 11.0918 23.9254 11.2659 23.9254 12.0954C23.9254 12.7814 23.4442 13.3037 22.3382 13.3037C21.2426 13.3037 20.6282 12.72 20.6282 11.5117H19.6554C19.6554 13.4061 20.792 14.1434 22.2563 14.1434ZM31.9958 11.6755H31.0127C31.0127 12.6483 30.4086 13.2525 29.4972 13.2525C28.2786 13.2525 27.6847 12.1978 27.6847 10.3341C27.6847 8.46016 28.3708 7.40544 29.487 7.40544C30.4188 7.40544 30.9513 8.0608 30.9513 9.10528H31.9548C31.9548 7.48736 30.8796 6.56576 29.4665 6.56576C27.7359 6.56576 26.7119 8.01984 26.7119 10.3341C26.7119 12.6688 27.695 14.0922 29.4972 14.0922C30.8898 14.0922 31.9958 13.1398 31.9958 11.6755ZM34.26 14H35.1918V11.0202H36.9019C37.629 11.0202 38.059 11.1738 38.059 11.9213V14H38.9909V11.8598C38.9909 11.143 38.571 10.5798 37.6187 10.5798C38.4584 10.3955 39.165 9.78112 39.165 8.7776C39.165 7.58976 38.3355 6.7808 36.7176 6.7808H34.26V14ZM35.1918 10.1907V7.62048H36.7176C37.5573 7.62048 38.1512 8.08128 38.1512 8.8288C38.1512 9.7504 37.547 10.1907 36.7483 10.1907H35.1918ZM43.682 14.1434C45.5047 14.1434 46.3444 12.5869 46.3444 10.3853C46.3444 8.20416 45.5047 6.61696 43.682 6.61696C41.8593 6.61696 41.0196 8.23488 41.0196 10.3853C41.0196 12.5459 41.8593 14.1434 43.682 14.1434ZM43.682 13.3037C42.402 13.3037 42.0026 12.0544 42.0026 10.3853C42.0026 8.7264 42.402 7.45664 43.682 7.45664C44.962 7.45664 45.3716 8.70592 45.3716 10.3853C45.3716 12.0851 44.962 13.3037 43.682 13.3037ZM48.6291 14H53.2781V13.1603H49.561V6.7808H48.6291V14ZM55.7983 14H60.4473V13.1603H56.7302V6.7808H55.7983V14Z" fill="black" />
          <path d="M69.2973 7.72288L68.8262 8.19392L70.7002 10.0781H66.1946L66.1843 10.7539H70.7002L68.8262 12.6381L69.2973 13.1091L71.9904 10.416L69.2973 7.72288Z" fill="black" />
          <rect x="0.25" y="0.25" width="80.5" height="19.5" rx="3.75" stroke="black" stroke-width="0.5" />
        </svg>
      </section>

      {data.sanityHomePage.publicationHighlights.map(({ title, date, abstract, author, slug, metaData, id, thumbnailCover }) => {
        return (
          <PostPublication title={title} thumbnailCover={thumbnailCover} slug={slug} date={date} metaData={metaData} author={author} key={id} abstract={abstract} />
        )
      })}
    </PublicationContainer>
  )
}

const PublicationContainer = styled.section`
    position: relative;
    cursor: ew-resize !important;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 5rem;

    #follower {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1001;
    }

    /* Mobile */
    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 3rem;
    }
  `






export default PublicationSection