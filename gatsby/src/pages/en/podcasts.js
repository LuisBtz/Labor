import React from "react"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"
import PodcastsPageEn from "../../components/podcastsPage/en/PodcastsPageEn"

// markup
const Podcasts = () => {
  return (
    <LayoutEn>
      <Seo title="Podcast" />
      <PodcastsPageEn />
    </LayoutEn>
    
  )
}

export default Podcasts;
