import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

// markup
const RelatedNewsModuleEn = ({ data }) => {


  return (
    <NewsContainer>
      <section id="FuturasTop">
        <p className="caps head">Related News <span className="arrow">↓</span></p>
      </section>
      <Flex>
        {data.relatedNews.map(({ title, metaData, slug, id }) => {
          return (
            <PostNewsWrapper
              to={`/en/news/${slug.current}`}
              key={id}
            >
              <h2><span className="arrow">→</span> {title.en}</h2>
            </PostNewsWrapper>
          )
        })}
      </Flex>
    </NewsContainer>

  )
}

const NewsContainer = styled.section`
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
}
  `

const Flex = styled.div`
  
display: flex;

/* Mobile */
@media screen and (max-width: 768px) {
flex-direction: column;
}
`


const PostNewsWrapper = styled(Link)`
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




export default RelatedNewsModuleEn