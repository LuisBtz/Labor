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
import ZoomModule from './ZoomModule';

const Modules = ({editorialModules}) => {

  console.log(editorialModules)

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
      <ZoomModule />
    </ModulesWrapper>

  )
}

const ModulesWrapper = styled.div``

export default Modules