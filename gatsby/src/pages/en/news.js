import React from "react"
import NewsPageEn from "../../components/newsPage/en/NewsPageEn"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"

// markup
const News = () => {
  return (
    <LayoutEn>
      <Seo title="News" />
      <NewsPageEn />
    </LayoutEn>
    
  )
}

export default News;
