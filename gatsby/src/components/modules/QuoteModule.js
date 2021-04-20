import React from 'react'
import styled from 'styled-components';

const QuoteModule = () => {

  return (

    <QuoteWrapper>
      <h2 className="bold">«The European languages are members of the same family. Their existence is a myth».</h2>
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
        font-size: var(--headline-4);
      }
  }
`

export default QuoteModule