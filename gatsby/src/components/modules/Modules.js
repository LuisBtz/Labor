import React from "react";
import styled from "styled-components";
import BodyText from "./BodyTextModule";
import Carousel from "./CarouselModule";
import Colophon from "./ColophonModule";
import FullImage from "./FullImageModule";
import MainHeadline from "./MainHeadlineModule";
import Quote from "./QuoteModule";
import TwoColumnsImage from "./TwoColumnsImageModule";
import Video from "./VideoModule";
import Zoom from "./ZoomModule";
import RelatedExhibitionsModule from './RelatedExhibitionsModule'
import RelatedArtistsModule from './RelatedArtistsModule'
import RelatedNewsModule from './RelatedNewsModule'
import RelatedPublicationsModule from './RelatedPublicationsModule'

const modulesArr = [
  { name: "bodyText", comp: BodyText },
  { name: "carousel", comp: Carousel },
  { name: "colophon", comp: Colophon },
  { name: "fullImage", comp: FullImage },
  { name: "mainHeadline", comp: MainHeadline },
  { name: "quote", comp: Quote },
  { name: "imageTwoColumns", comp: TwoColumnsImage },
  { name: "video", comp: Video },
  { name: "zoom", comp: Zoom },
  { name: "relatedExhibitions", comp: RelatedExhibitionsModule},
  { name: "relatedArtists", comp: RelatedArtistsModule},
  { name: "relatedNews", comp: RelatedNewsModule},
  { name: "relatedPublications", comp: RelatedPublicationsModule},
];

const Modules = ({ editorialModule, props }) => {
  let final_arr = [];

  editorialModule.forEach((edMod) => {
    modulesArr.forEach((mMod) => {
      if (edMod["_type"] === mMod.name) {
        final_arr.push({ ...edMod, ...mMod });
      }
    });
  });

  return (
    <ModulesWrapper>
      {final_arr.map((Module, i) => (
        <Module.comp key={i} data={{ ...Module }} props={props} />
      ))}
    </ModulesWrapper>
  );
};

const ModulesWrapper = styled.div``;

export default Modules;
