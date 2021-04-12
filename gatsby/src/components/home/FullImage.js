import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const FullImage = ({ data }) => {




  const getDataImage = getImage(data.datoCmsHome.homeHeroPost.coverThumbnailImage);
  const title = data.datoCmsHome.homeHeroPost.title;
  const author = data.datoCmsHome.homeHeroPost.author;
  const date = data.datoCmsHome.homeHeroPost.date;
  const slug = data.datoCmsHome.homeHeroPost.slug;

  return (
    <FullImageContainer
    to={`/exposition/${slug}`}
    >
      <GatsbyImage
        image={getDataImage}
      />
      <Text>
        <h1>{title}</h1>
        <h6 className="regular">↖ {author} <br /> {date}</h6>
      </Text>
    </FullImageContainer>

  )
}

const FullImageContainer = styled(Link)`
    width: 100%;
    background: var(--white);
/* padding-top: 90px; */
padding-top: 35vw;

@media screen and (max-width: 1200px) {
  padding-top: 38vw;
}

@media screen and (max-width: 768px) {
  padding-top: 47vw;
}
  `

const Text = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: 0 1rem;

  h6 {
    padding-top: .5rem;
    line-height: 120%;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    grid: none;
    margin-bottom: 3.5rem;
    
    h1 {
      font-size: var(--headline-3);
    }

    h6 {
      font-size: var(--paragraph);
      max-width: 50%;
      margin-left: 50%;
    }
  }
`







export default FullImage