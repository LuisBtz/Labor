import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

// markup
const RelatedPublicationsModule = ({ data }) => {


  return (
    <PublicationsContainer>
        <section id="FuturasTop">
          <p className="caps medium head">Publicaciones Relacionadas <span className="arrow">↓</span></p>
        </section>
        <Flex>
            {data.relatedPublications.map(({ title, metaData, slug, id }) => {
                return (
                    <PostPublicationWrapper
                    to={`/publications/${slug.current}`}
                    key={id}
                >
                    <p class="detail">{metaData.es}</p>
                    <h2><span className="arrow">→</span> {title.es}</h2>
                </PostPublicationWrapper>
                )
            })}
        </Flex>
    </PublicationsContainer>

  )
}

const PublicationsContainer = styled.section`
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


const PostPublicationWrapper = styled(Link)`
  width: 50vw;
  padding: 1rem;
  margin-bottom: 5rem;

  h2 {
    margin: 1rem 0;
    max-width: 95%;
  }

  h2:hover .arrow {
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
    padding: 1rem;
    margin-bottom: 0;
    box-sizing: border-box;

    h2 {
      font-size: var(--headline-4);
    }
  }
`




export default RelatedPublicationsModule