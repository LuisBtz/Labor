import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react';



// markup
export default function SinglePodcastPage( { data : { podcast } } ) {
    

    const title = podcast.title.es
    const headline = podcast.bodyText.es.headline
    const paragraph = podcast.bodyText.es._rawParagraph

    return (
        <Layout>
        <Seo title="New" />
        <ContainerTitle>
            <h1>{title}</h1>

            <Player dangerouslySetInnerHTML={{
                __html: podcast.episodePlayer
            }}/>

            <BodyTextWrapper>
            <h5 className="bold">{headline}</h5>
            <BlockContent
            blocks={paragraph}
          />
            </BodyTextWrapper>

        </ContainerTitle>
        </Layout>

    )
}

const ContainerTitle = styled.div`
display: block;
`

const Player = styled.div`
display: block;
`

const BodyTextWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 5rem auto;

    p {
      width: 50%;
      padding: 0 .5rem;
      line-height: 140%;
    }

    h5 {
      width: 25%;
      padding: 0 .5rem;

        @media screen and (max-width: 980px) {
          width: 35%;
        }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      p, h5 {
        width: 100%;
        margin: .5rem 0;
      }
    }
`


export const query = graphql`
    query($slug: String!){
        podcast: sanityPodcast(slug: {
		current: {eq: $slug} }){
            title {
                es
            }
            episodePlayer
            bodyText {
                es {
                    _rawParagraph
                    headline
                }
            }
        }
    }
`



