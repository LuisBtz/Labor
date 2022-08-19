import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'


import { GatsbyImage, getImage } from "gatsby-plugin-image"


const RelatedExhibitionsModuleEn = ({ data }) => {


  return (



    <ExhibitionContainer>
      <section id="FuturasTop">
        <p className="caps head">Related Exhibitions <span className="arrow">↓</span></p>
      </section>
      <Flex>
        {data.relatedExhibitions.map(({ title, author, slug, startDate, endDate, thumbnailCover, id }) => {
          const image = getImage(thumbnailCover.asset);

          const dateStart = startDate;
          const dateEND = endDate;
          return (
            <PostExpositionWrapper
              key={id}
              to={`/en/exhibitions/${slug.current}`}
            >
              <GatsbyImage
                image={image}
                alt={title.en}
              />
              <Text>
                <Date className="caps">{dateStart} - {dateEND}</Date>
                <h5>{title.en}</h5>
                <Author className="caps"><span className="arrow">↑</span> {author}</Author>
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
  width: 90%;
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



export default RelatedExhibitionsModuleEn