import React from "react"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"
import CurrentExpositionEn from "../../components/expositionsPage/en/CurrentExposition"
import FutureExpositionEn from "../../components/expositionsPage/en/FutureExposition"
import PastExpositionEn from "../../components/expositionsPage/en/PastExposition"



// markup
const Publications = () => {
  return (
    <LayoutEn>
      <Seo title="Expositions / Labor" />
      <CurrentExpositionEn />
      <FutureExpositionEn />
      <PastExpositionEn />
    </LayoutEn>
    
  )
}

export default Publications;
