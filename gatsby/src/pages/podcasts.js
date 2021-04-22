import React from "react"
import PodcastsPage from "../components/podcastsPage/PodcastsPage"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

// markup
const Podcasts = () => {
  return (
    <Layout>
      <Seo title="Podcast" />
      <PodcastsPage />
    </Layout>
    
  )
}

export default Podcasts;
