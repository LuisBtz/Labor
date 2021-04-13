import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// markup
const Contact = () => {

  const data = useStaticQuery(graphql`
    query  {
        datoCmsContact(locale: {eq: "es"}) {
            team {
                name
                memberPosition
                eMail
                id
            }
            horario
            mapCode
        }
    }
    `)

  // const adress = data.datoCmsSetting.address;
  // const tel = data.datoCmsSetting.tel;
  // const mail = data.datoCmsSetting.mail;
  const mapa = data.datoCmsContact.mapCode;

  return (
    <Layout>
      <Seo title="Contact" />
      <Team>
        {data.datoCmsContact.team.map(({ name, memberPosition, eMail, id }) => {
          return (
            <div key={id}>
              <p className="caps">{memberPosition}</p>
              <h5>{name}</h5>
              <a href={'mailto:' + eMail}>{eMail}</a>
            </div>
          )
        })}
      </Team>
      <HorarioMap>
        <div className='horario' dangerouslySetInnerHTML={{ __html: data.datoCmsContact.horario }} />

        <div className='mapa' dangerouslySetInnerHTML={{ __html: mapa }} />
      </HorarioMap>
    </Layout>

  )
}

const Team = styled.section`
  background: var(--white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8rem 1rem 1rem 1rem;

  p {
    font-size: var(--detail);
  }

  h5 {
    margin: .75rem 0;
  }

  a:hover {
    text-decoration: line-through;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding-top: 6rem;

    div {
      margin-bottom: 2rem;
    }
  }
`

const HorarioMap = styled.section`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(3, 1fr);

  div:first-child {
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 2rem 1rem;
  }

  div:last-child {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  iframe {
    width: 100%;
  }

  h4 {
    font-size: var(--detail);
  }

  p {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: solid 1px #f2f2f2;
  }
`

export default Contact;
