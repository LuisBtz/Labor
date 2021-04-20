import React from 'react'
import styled from 'styled-components';

const ColophonModule = () => {

  return (

    <ColophonWrapper>
      <Colophon>
        <h4 className="small bold"><span className="arrow">↓</span>COLOPHON</h4>
        <p className="small">September 2015 Edited by Anne Kaestle and Dan Schürch Published by Anne Kaestle and Dan Schürch Language: German Book concept and design: Ludovic Balland Typography Cabinet with Andreas Hänggi</p>
      </Colophon>
      <Info>
        <h4 className="small bold"><span className="arrow">↓</span>TECHNICAL INFORMATION</h4>
        <p className="small">Softcover, 160 × 240 mm, 164 pages Typeface: Next by Ludovic Balland Print: CPI, France</p>
      </Info>
    </ColophonWrapper>

  )
}

const ColophonWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 5rem auto;

  h4 {
    margin-bottom: .5rem;
  }
`
const Colophon = styled.div`
  width: 25%;
  padding: 1rem;

    @media screen and (max-width: 768px){
      width: 100%;
    }
`

const Info = styled.div`
  width: 25%;
  padding: 1rem;

    @media screen and (max-width: 768px){
      width: 100%;
    }
`

export default ColophonModule