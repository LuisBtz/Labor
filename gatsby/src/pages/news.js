import React from "react"
import NewsPage from "../components/newsPage/NewsPage"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

// markup
const News = () => {
  return (
    <Layout>
      <Seo title="News" />
      <NewsPage />
    </Layout>
    
  )
}

export default News;
