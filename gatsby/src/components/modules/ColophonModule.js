import React from 'react'
import styled from 'styled-components';

const ColophonModule = () => {

    return (

    <ColophonWrapper>
        <Colophon>
            <h4>↓COLOPHON</h4>
            <p>September 2015 Edited by Anne Kaestle and Dan Schürch Published by Anne Kaestle and Dan Schürch Language: German Book concept and design: Ludovic Balland Typography Cabinet with Andreas Hänggi</p>
        </Colophon>
        <Info>
            <h4>↓TECHNICAL INFORMATION</h4>
            <p>Softcover, 160 × 240 mm, 164 pages Typeface: Next by Ludovic Balland Print: CPI, France</p>
        </Info>
    </ColophonWrapper>
  
    )
  }

const ColophonWrapper = styled.section``
const Colophon = styled.div``
const Info = styled.div``

export default ColophonModule