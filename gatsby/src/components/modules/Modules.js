import React from 'react'
import styled from 'styled-components';
import BodyTextModule from './BodyTextModule';
import CarouselModule from './CarouselModule';
import ColophonModule from './ColophonModule';
import FullImageModule from './FullImageModule';
import MainHeadlineModule from './MainHeadlineModule';
import QuoteModule from './QuoteModule';
import TwoColumnsImageModule from './TwoColumnsImageModule';
import VideoModule from './VideoModule';

const Modules = () => {

  return (
    <ModulesWrapper >
      <FullImageModule />
      <MainHeadlineModule />
      <BodyTextModule />
      <TwoColumnsImageModule />
      <QuoteModule />
      <CarouselModule />
      <VideoModule />
      <ColophonModule />
    </ModulesWrapper>

  )
}

const ModulesWrapper = styled.div``

export default Modules