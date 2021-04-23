import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';

const MainHeadlineModuleEn = ({ data }) => {

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const text = data.textField.en

  return (

    <MainHeadlineWrapper>

      <h1>{text}</h1>
      <Buttons>

        {data.buttons && data.buttons.en && data.buttons.en.agenda &&
          (data.buttons.en.agenda === true ? <li><Link to='/en/contact' className="cta small caps">Schedule an appointment</Link></li> : '')
        }



        {data.buttons && data.buttons.en && data.buttons.en.dossier &&
          (data.buttons.en.dossier ? <li><a rel="noreferrer" target='_blank' href={data.buttons.en.dossier}>Dossier</a></li> : '')
        }


        {data.buttons && data.buttons.en && data.buttons.en.resume &&
          (data.buttons.en.resume ? <li><a rel="noreferrer" target='_blank' href={data.buttons.en.resume}>Resume</a></li> : '')
        }

        {data.buttons && data.buttons.en && data.buttons.en.social &&
          (data.buttons.en.social === true ?
            <Social>
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 1rem;
  }

  h1 {
    max-width: 75%;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }

      @media screen and (max-width: 768px) {
        font-size: var(--headline-3);
      }
  }
`

const Social = styled.div`
display: flex;

@media screen and (max-width: 768px) {
  margin-top: 1.5rem;
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

export default MainHeadlineModuleEn