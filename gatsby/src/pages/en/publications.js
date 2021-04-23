import React from "react"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"
import PublicationsPageEn from "../../components/publicationsPage/en/PublicationsPageEn"

// markup
const ExpositionsPage = () => {
  return (
    <LayoutEn>
      <Seo title="Publications" />
      <PublicationsPageEn />
    </LayoutEn>
    
  )
}

export default ExpositionsPage;