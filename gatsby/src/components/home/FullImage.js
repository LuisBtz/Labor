import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


// markup
const FullImage = ( ) => {

const data = useStaticQuery(graphql`
        query  {
          datoCmsHome {
            homeHeroPost {
              ... on DatoCmsExhibition {
                coverThumbnailImage {
                  gatsbyImageData(layout: FULL_WIDTH, width: 1200, forceBlurhash: true)
                }
                title
                date
                author
              }
            }
          }
        }
  `) 


const getDataImage = getImage(data.datoCmsHome.homeHeroPost.coverThumbnailImage);
const title = data.datoCmsHome.homeHeroPost.title;
const author = data.datoCmsHome.homeHeroPost.author;
const date = data.datoCmsHome.homeHeroPost.date;

    return (
      <FullImageContainer>
          <GatsbyImage
            image={getDataImage}
            />
            <Text>
              <h1>{title}</h1>
              <p>↖ {author} <br /> {date}</p>
            </Text>
      </FullImageContainer>
      
    )
  }

  const FullImageContainer = styled.section`
    width: 100%;
  `

  const Text = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 20px;
`







  export default FullImage