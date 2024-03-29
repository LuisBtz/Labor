import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const FullImage = ({ data }) => {

  const getDataImage = getImage(data.sanityHomePage.exhibitionsHF.thumbnailCover.asset);
  const title = data.sanityHomePage.exhibitionsHF.title.en;
  const author = data.sanityHomePage.exhibitionsHF.author;
  const dateStart = data.sanityHomePage.exhibitionsHF.startDate;
  const dateEND = data.sanityHomePage.exhibitionsHF.endDate;
  const pastCurrentOrFuture = data.sanityHomePage.exhibitionsHF.current;
  const slug = data.sanityHomePage.exhibitionsHF.slug.current;

  return (
    <FullImageContainer
      to={`/en/exhibitions/${slug}`}
    >
      <GatsbyImage
        image={getDataImage}
        alt={author}
      />
      <Text>
        <h1>{title}</h1>
        <h6 className="regular">↖ {author} <br /> {dateStart} - {dateEND} - {pastCurrentOrFuture}</h6>
      </Text>
    </FullImageContainer>

  )
}

const FullImageContainer = styled(Link)`
    width: 100%;
    background: var(--white);
    display: block;
    padding-top: 35vw;

    @media screen and (max-width: 1230px) {
      padding-top: 38vw;
    }

    @media screen and (max-width: 768px) {
      padding-top: 50vw;
    }
  `

const Text = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  margin-bottom: 10rem;
  padding: 0 1rem;

  h6 {
    padding-top: .5rem;
    line-height: 120%;
  }

  h1 {
    word-break: break-word;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    grid: none;
    grid-gap: 1rem;
    margin-bottom: 5rem;
    
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