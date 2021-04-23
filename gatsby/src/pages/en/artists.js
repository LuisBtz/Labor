import React from "react"
import ArtistsPageEn from "../../components/artistsPage/en/ArtistsPageEn"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"

// markup
const Artists = () => {
  return (
    <LayoutEn>
      <Seo title="Artists / Labor " />
      <ArtistsPageEn />
    </LayoutEn>
    
  )
}

export default Artists;