import React from "react"
import ArtistsPage from "../components/artistsPage/ArtistsPage"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

// markup
const Artists = () => {
  return (
    <Layout>
      <Seo title="Artists" />
      <ArtistsPage />
    </Layout>
    
  )
}

export default Artists;
