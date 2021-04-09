import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import PublicationPage from '../components/publicationsPage/PublicationPage'

// markup
const ExpositionsPage = () => {
  return (
    <Layout>
      <SEO title="Expositions" />
      <PublicationPage />
    </Layout>
    
  )
}

export default ExpositionsPage;
