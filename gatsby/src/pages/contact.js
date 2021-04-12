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
               <p>{memberPosition}</p>
               <h5>{name}</h5>
               <a href={'mailto:'+eMail}>{eMail}</a>
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
    padding: 90px 20px 20px 20px;
    box-sizing: border-box;
`

const HorarioMap = styled.section`

`

export default Contact;
