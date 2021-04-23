import React from "react";
import styled from "styled-components";
import BodyTextEn from "./BodyTextModuleEn";
import CarouselEn from "./CarouselModuleEn";
import ColophonEn from "./ColophonModuleEn";
import FullImageEn from "./FullImageModuleEn";
import MainHeadlineEn from "./MainHeadlineModuleEn";
import QuoteEn from "./QuoteModuleEn";
import TwoColumnsImageEn from "./TwoColumnsImageModuleEn";
import VideoEn from "./VideoModuleEn";
import ZoomEn from "./ZoomModuleEn";

const modulesArr = [
  { name: "bodyText", comp: BodyTextEn },
  { name: "carousel", comp: CarouselEn },
  { name: "colophon", comp: ColophonEn },
  { name: "fullImage", comp: FullImageEn },
  { name: "mainHeadline", comp: MainHeadlineEn },
  { name: "quote", comp: QuoteEn },
  { name: "imageTwoColumns", comp: TwoColumnsImageEn },
  { name: "video", comp: VideoEn },
  { name: "zoom", comp: ZoomEn },
];

const ModulesEn = ({ editorialModule, props }) => {
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

export default ModulesEn;
