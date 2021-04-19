import React from 'react'
import styled from 'styled-components';

const MainHeadlineModule = () => {

    return (

      <MainHeadlineWrapper>
          
        <h1>An Index and Its Settings (Un índice y sus entornos)</h1>
        <Buttons>
            <li><a href='https://facebook.com'>Agenda tu cita</a></li>
            <li><a href='https://facebook.com'>FB</a></li>
            <li><a href='https://facebook.com'>TW</a></li>
        </Buttons>
        
        
      </MainHeadlineWrapper>
  
    )
  }

const MainHeadlineWrapper = styled.section`
    display: flex;
`

const Buttons = styled.ul`
    display: flex;
`

  export default MainHeadlineModule