import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { Helmet } from "react-helmet"

import FullImage from '../components/home/FullImage'
import ExhibitionSection from '../components/home/ExhibitionSection'
import ArtistSection from '../components/home/ArtistSection'
import MarqueeSection from "../components/home/MarqueeSection"
import PublicationSection from "../components/home/PublicationSection"
import NewsSection from "../components/home/NewsSection"
import NewsLetter from "../components/home/NewsLetter"

export const data = graphql`
  query  {
    sanityHomePage {
    exhibitionsHF {
      thumbnailCover {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, width: 10, outputPixelDensities: 1.5)
        }
      }
      author
      date
      title {
        es
      }
      slug {
        current
      }
    }
    exhibitionsHighlights {
      title {
        es
      }
      author
      slug {
        current
      }
      date
      metaData {
        es
      }
      id
      thumbnailCover {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
        }
      }
    }
    artistsHighlights {
      name
      slug {
        current
      }
      metaData {
        es
      }
      id
      from {
        es
      }
      abstract {
        es
      }
      thumbnail {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
        }
      }
    }
    marquee {
      es {
        url
        marqueeText
      }
    }
    publicationHighlights {
      title {
        es
      }
      date
      abstract {
        es
      }
      author
      slug {
        current
      }
      metaData {
        es
      }
      id
      thumbnailCover {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
        }
      }
    }
    recentNews {
      title {
        es
      }
      metaData {
        es
      }
      slug {
        current
      }
      id
    }
  }
    }
  `


// markup
const IndexPage = ({ data }) => {

  return (
    <LayoutStyle>
      <Seo title="Home" />
      <Helmet>
        <script src="https://www.dreamx.mx/scriptlabor.js" type="text/javascript" />
      </Helmet>
      <FullImage data={data} />
      <ExhibitionSection data={data} />
      <ArtistSection data={data} />
      <MarqueeSection data={data} />
      <PublicationSection data={data} />
      <NewsSection data={data} />
      <NewsLetter />
    </LayoutStyle>

  )
}

const LayoutStyle = styled(Layout)`
`

export default IndexPage