import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Modules from '../components/modules/Modules'


// markup
export default function SingleArtistPage({data : {artist}}) {
    const heroImage = getImage(artist.thumbnail.asset);  
    

    return (
        <Layout>
        <Seo title="Artist" />
        <Hero>
        <GatsbyImage
            image={heroImage}
            alt={artist.name}
        />
        </Hero>
        <Modules editorialModule={artist.editorialModule} />
        </Layout>

    )
}

const Hero = styled.div``


export const query = graphql`
    query($slug: String!){
        artist: sanityArtists(slug: {
		current: {eq: $slug} }){
            name
            thumbnail {
                asset {
                    gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                }
            }
            editorialModule {
            ... on SanityFullImage {
                _key
                _type
                inlineFullImage {
                asset {
                    gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5)
                }
                }
            }
            }
        }
    }
`



