import { graphql } from 'gatsby'
import React from 'react'
import LayoutEn from '../../components/layout/en/layoutEn'
import Seo from '../../components/layout/seo'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';



// markup
export default function SinglePodcastPage({ data: { podcast } }) {


  const title = podcast.title.en
  const headline = podcast.bodyText.en.headline
  const paragraph = podcast.bodyText.en._rawParagraph

  return (
    <LayoutEn>
      <Seo title={podcast.seo && podcast.seo.en.titleSeo} description={podcast.seo && podcast.seo.en.pageDescription} image={podcast.thumbnailCover.asset.url} />
      <ContainerTitle>
        <h1 className="regular">▶ {title}</h1>

        <Player dangerouslySetInnerHTML={{
          __html: podcast.episodePlayer
        }} />

        <BodyTextWrapper>
          <h5 className="bold">{headline}</h5>
          <BlockContent
            blocks={paragraph}
          />
        </BodyTextWrapper>

      </ContainerTitle>
    </LayoutEn>

  )
}

const ContainerTitle = styled.div`
  display: block;
  padding: 7rem 1rem;
  
  h1 {
    margin-bottom: 5rem;
    max-width: 75%;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 1rem;

    h1 {
      max-width: 100%;
      font-size: var(--headline-3);
      margin-bottom: 2rem;
    }
  }
`

const Player = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 75%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const BodyTextWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    margin: 5rem auto;

    > div {
      width: 50%;
      padding: 0 1.5rem 0 .5rem;
    }

    p {
      line-height: 140%;
      padding: 0.5rem 0;
    }

    h5 {
      visibility: hidden;
    }

    @media screen and (max-width: 768px) {
      margin: 2rem auto;
      flex-direction: column;

      > div {
        width: 100%;
        padding: 0 .5rem;
      }

      p {
        width: 100%;
        margin: .5rem 0;
        padding: 0;
      }
    }
`


export const query = graphql`
    query($slug: String!){
        podcast: sanityPodcast(slug: {
		current: {eq: $slug} }){
            title {
                en
            }
            seo {
                en {
                    pageDescription
                    titleSeo
                }
            }
            thumbnailCover {
              asset {
                url
              }
            }
            episodePlayer
            bodyText {
                en {
                    _rawParagraph
                    headline
                }
            }
        }
    }
`



