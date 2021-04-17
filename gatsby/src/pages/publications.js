import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import PublicationsPage from '../components/publicationsPage/PublicationsPage'

// markup
const ExpositionsPage = () => {
  return (
    <Layout>
      <Seo title="Expositions" />
      <PublicationsPage />
    </Layout>
    
  )
}

export default ExpositionsPage;