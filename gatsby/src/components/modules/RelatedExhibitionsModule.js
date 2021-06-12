import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'


import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RelatedExhibitionsModule = ({ data }) => {


  return (

    

    <ExhibitionContainer>
      <section id="FuturasTop">
          <p className="caps medium head">Exposiciones Relacionadas <span className="arrow">↓</span></p>
      </section>
      <Flex>
    {data.relatedExhibitions.map(({ title, author, slug, startDate, endDate, thumbnailCover, id }) => {
        const image = getImage(thumbnailCover.asset);

        const dateStart = startDate;
        const dateEND = endDate;
      return (
        <PostExpositionWrapper
        key={id}
        to={`/expositions/${slug.current}`}
        >
          <GatsbyImage
            image={image}
            alt={title.es}
          />
          <Text>
            <p className="detail regular">{dateStart} - {dateEND}</p>
            <h4 className="black">{title.es}</h4>
            <p className="medium caps"><span className="arrow">↑</span> {author}</p>
          </Text>
        </PostExpositionWrapper>
      )
    })}
    </Flex>
  </ExhibitionContainer>

  )
}


const ExhibitionContainer = styled.section`
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


const PostExpositionWrapper = styled(Link)`
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

  h2 {
    margin: .5rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      /* font-size: var(--headline-3); */
      margin: 0.75rem 0 .5rem 0;
    }
  }
`


export default RelatedExhibitionsModule