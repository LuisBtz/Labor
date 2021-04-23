import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"

import FullImageEn from '../../components/home/en/FullImageEn'
import ExhibitionSectionEn from '../../components/home/en/ExhibitionSectionEn'
import ArtistSectionEn from '../../components/home/en/ArtistSectionEn'
import MarqueeSectionEn from "../../components/home/en/MarqueeSectionEn"
import PublicationSectionEn from "../../components/home/en/PublicationSectionEn"
import NewsSectionEn from "../../components/home/en/NewsSectionEn"
import NewsLetterEn from "../../components/home/en/NewsLetterEn"

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
        en
      }
      slug {
        current
      }
    }
    exhibitionsHighlights {
      title {
        en
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
        en
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
        en
      }
      id
      from {
        en
      }
      abstract {
        en
      }
      thumbnail {
        asset {
          gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
        }
      }
    }
    marquee {
      en {
        url
        marqueeText
      }
    }
    publicationHighlights {
      title {
        en
      }
      date
      abstract {
        en
      }
      author
      slug {
        current
      }
      metaData {
        en
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
        en
      }
      metaData {
        en
      }
      slug {
        current
      }
      id
    }
    seo {
      en {
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
    <LayoutEn scroll={scroll} indexTrue={indexTrue}>
      <Seo title={data.sanityHomePage.seo && data.sanityHomePage.seo.en.titleSeo} description={data.sanityHomePage.seo && data.sanityHomePage.seo.en.pageDescription} image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url} />
      <FullImageEn data={data} />
      <ExhibitionSectionEn data={data} />
      <ArtistSectionEn data={data} />
      <MarqueeSectionEn data={data} />
      <PublicationSectionEn data={data} />
      <NewsSectionEn data={data} />
      <NewsLetterEn />
    </LayoutEn>
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