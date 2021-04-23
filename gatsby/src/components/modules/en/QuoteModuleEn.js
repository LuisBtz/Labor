import React from 'react'
import styled from 'styled-components';

const QuoteModuleEn = ({ data }) => {

  return (

    <QuoteWrapper>
      {data.quoteText && data.quoteText.en &&
        (data.quoteText.en ? <h2 className="bold">{data.quoteText.en}</h2> : '')
      }
    </QuoteWrapper>

  )
}

const QuoteWrapper = styled.section`
  margin: 5rem auto;
  padding: 1rem;

  h2 {
    max-width: 75%;

      @media screen and (max-width: 768px) {
        max-width: 100%;
        font-size: var(--headline-5);
      }
  }

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }
`

export default QuoteModuleEn