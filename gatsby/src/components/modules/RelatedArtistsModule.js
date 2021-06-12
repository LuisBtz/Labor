import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RelatedArtistsModule = ({ data }) => {


  return (

    

    <ArtistsContainer>
      <section id="FuturasTop">
          <p className="caps medium head">Artistas Relacionados <span className="arrow">↓</span></p>
      </section>
      <Flex>
    {data.relatedArtists.map(({ name, slug, metaData, id, from, abstract, thumbnail }) => {
        const image = getImage(thumbnail.asset);
      return (
        <PostArtistsWrapper
        key={id}
        to={`/artists/${slug.current}`}
        >
          <GatsbyImage
            image={image}
            alt={name}
          />
          <Text>
            <p className="detail">{metaData.es}</p>
            <h3>{name}</h3>
            <p>{from.es}</p>
            <Abstract>{abstract.es}</Abstract>
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
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: .5rem 1rem;

  h3 {
    margin: .75rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;

    h3 {
      margin: 0.75rem 0 .5rem 0;
    }
  }
`

const Abstract = styled.p`
  margin-top: 2rem;
  text-indent: 2rem;
`


export default RelatedArtistsModule