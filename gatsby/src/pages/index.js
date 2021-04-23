import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

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
          url
          gatsbyImageData(layout: FULL_WIDTH, width: 10, outputPixelDensities: 1.5)
        }
      }
      startDate(formatString: "MMM DD YYYY")
      endDate(formatString: "MMM DD YYYY")
      current
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
      startDate(formatString: "MMM DD YYYY")
      endDate(formatString: "MMM DD YYYY")
      current
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
    seo {
      es {
        pageDescription
        titleSeo
      }
    }
  }
    }
  `


// markup
const IndexPage = ({ data }) => {

  const indexTrue = true;

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []); 

  return (
    <Layout scroll={scroll} indexTrue={indexTrue}>
      <Seo title={data.sanityHomePage.seo.es.titleSeo} description={data.sanityHomePage.seo.es.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} />
      <FullImage data={data} />
      <ExhibitionSection data={data} />
      <ArtistSection data={data} />
      <MarqueeSection data={data} />
      <PublicationSection data={data} />
      <NewsSection data={data} />
      <NewsLetter />
    </Layout>
  )
}


// const LogoImage = styled.img`
//   /* padding: 6rem .5rem 2.5rem .5rem; */
//   position: fixed;
//   top: 6rem;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 999;
//   width: 98vw;

//   transition: all .75s ease-in-out;
// `

export default IndexPage