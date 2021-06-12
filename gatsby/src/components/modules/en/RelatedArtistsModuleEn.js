import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RelatedArtistsModuleEn = ({ data }) => {


  return (

    

    <ArtistsContainer>
      <section id="FuturasTop">
          <p className="caps medium head">Related Artists <span className="arrow">↓</span></p>
      </section>
      <Flex>
    {data.relatedArtists.map(({ name, slug, metaData, id, from, thumbnail }) => {
        const image = getImage(thumbnail.asset);
      return (
        <PostArtistsWrapper
        key={id}
        to={`/en/artists/${slug.current}`}
        >
          <GatsbyImage
            image={image}
            alt={name}
          />
          <Text>
            <Date className="caps">{metaData.en}</Date>
            <h5>{name}</h5>
            <Author className="caps"><span className="arrow">↑</span> {from.en}</Author>
          </Text>
        </PostArtistsWrapper>
      )
    })}
    </Flex>
  </ArtistsContainer>

  )
}


const ArtistsContainer = styled.section`
 width: 100%;

#FuturasTop {
  padding-top: 6rem;
}

@media screen and (max-width: 768px) {
  #FuturasTop {
    padding-top: 4rem;
  }
}

.head {
  padding: 1.25rem;
  border-top: solid 1px #f2f2f2;
}
  `

  const Flex = styled.div`
  
  display: flex;

/* Mobile */
@media screen and (max-width: 768px) {
  flex-direction: column;
}
  `


const PostArtistsWrapper = styled(Link)`
width: 50vw;

  :hover  p .arrow {
    animation: blink .5s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }


/* Mobile */
@media screen and (max-width: 768px) {
  width: 100vw;
}
`


const Text = styled.div`
  width: 80%;
  margin-top: 0;
  margin-bottom: 3rem;
  padding: 1rem;
  h5 {
    /* font-size: var(--headline-4); */
    font-family: var(--bold);
    margin: .5rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

`

const Date = styled.p`
  font-size: var(--detail);
`

const Author = styled.p`
  font-size: var(--paragraph);
`




export default RelatedArtistsModuleEn