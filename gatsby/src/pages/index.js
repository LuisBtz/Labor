import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import FullImage from '../components/modules/FullImage'




// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <FullImage />
    </Layout>
    
  )
}

export default IndexPage
