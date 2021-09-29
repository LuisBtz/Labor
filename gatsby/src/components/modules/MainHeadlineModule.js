import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const MainHeadlineModule = ({ data }) => {

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const text = data.textField.es

  return (

    <MainHeadlineWrapper>

      <h1>{text}</h1>
      <Buttons>
        {/* <p className="label small caps">Documentos:</p> */}

        {data.buttons && data.buttons.es && data.buttons.es.agenda &&
          (data.buttons.es.agenda === true ? <li><Link to='/contact' className="cta small caps">Agenda tu cita</Link></li> : '')
        }

        {data.buttons && data.buttons.es && data.buttons.es.dossier &&
          (data.buttons.es.dossier ? <li><a rel="noreferrer" target='_blank' className="small caps" href={data.buttons.es.dossier}>Dossier</a></li> : '')
        }

        {data.buttons && data.buttons.es && data.buttons.es.resume &&
          (data.buttons.es.resume ? <li><a rel="noreferrer" target='_blank' className="small caps" href={data.buttons.es.resume}>CV</a></li> : '')
        }

        {data.buttons && data.buttons.es && data.buttons.es.social &&
          (data.buttons.es.social === true ?
            <Social>
              <li className="label small caps">Comparte:</li>
              <li><a rel="noreferrer" target='_blank' href={'https://www.facebook.com/sharer/sharer.php?u=' + url} className="small caps">FB</a></li>
              <li><a rel="noreferrer" href={'https://twitter.com/intent/tweet/?text=' + text + '&url=' + url} target="_blank" className="small caps">TW</a></li>
            </Social>
            : '')
        }
      </Buttons>



    </MainHeadlineWrapper>

  )
}

const MainHeadlineWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 5rem auto;

  .label {
    text-transform: uppercase;
    padding-top: 3px;
    margin: 0 1rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 1rem;

    .label {
      margin-right: .25rem;
    }

    p.label {
      margin-left: 0;
    }
  }

  h1 {
    max-width: 70%;
    hyphens: auto;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
        margin-bottom: 2rem;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--headline-3);
      }
  }
`

const Social = styled.div`
display: flex;
`

const Buttons = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;

      li:first-child {
        margin-bottom: 1.5rem;
      }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-end;

      li:first-child {
        margin-bottom: 1.5rem;
      }
  }

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