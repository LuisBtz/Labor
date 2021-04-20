import React from 'react'
import styled from 'styled-components';

const MainHeadlineModule = () => {

  return (

    <MainHeadlineWrapper>

      <h1>An Index and Its Settings (Un índice y sus entornos)</h1>
      <Buttons>
        <li><a href='https://facebook.com' className="cta small caps">Agenda tu cita</a></li>
        <li><a href='https://facebook.com' className="small caps">FB</a></li>
        <li><a href='https://facebook.com' className="small caps">TW</a></li>
      </Buttons>


    </MainHeadlineWrapper>

  )
}

const MainHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 5rem auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  h1 {
    max-width: 75%;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 2.5rem;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--headline-3);
      }
  }
`

const Buttons = styled.ul`
  display: flex;

  li {
    margin: 0 .25rem;
  }

  a {
    background: var(--white);
    border: solid 1px var(--black);
    border-radius: .25rem;
    padding: 0.35rem 0.75rem;
  }

  a:hover {
    background: var(--black);
    color: var(--white);
  }

  .cta {
    background: var(--black);
    color: var(--white);
    border-radius: 10rem;
    text-transform: uppercase;
  }
`

export default MainHeadlineModule