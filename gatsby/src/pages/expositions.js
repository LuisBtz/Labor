import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import CurrentExposition from "../components/expositionsPage/CurrentExposition"
import FutureExposition from "../components/expositionsPage/FutureExposition"
import PastExposition from "../components/expositionsPage/PastExposition"



// markup
const Publications = () => {
  return (
    <Layout>
      <Seo title="Expositions" />
      <CurrentExposition />
      <FutureExposition />
      <PastExposition />
    </Layout>
    
  )
}

export default Publications;
