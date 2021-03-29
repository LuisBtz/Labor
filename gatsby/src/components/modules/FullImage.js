import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const FullImage = ( ) => {

const data = useStaticQuery(graphql`
        query  {
            file(relativePath: {eq: "heroImage.jpg"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                    )
                }
            }
        }
  `) 


    const getData = getImage(data.file);
    console.log(getData)
    return (
      <ModuleFullImage>
          <GatsbyImage
            image={getData}
            />
      </ModuleFullImage>
      
    )
  }

  const ModuleFullImage = styled.section`
    width: 100%;
  `






  export default FullImage