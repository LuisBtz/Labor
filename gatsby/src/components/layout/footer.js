import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"




// markup
const Footer = () => {

    const data = useStaticQuery(graphql`
        query  {
                datoCmsSetting {
                    address
                    mail
                    tel
                    socialMedia {
                        socialMediaPlatform
                        socialMediaLink
                        id
                    }
            }
        }
        `)

    const adress = data.datoCmsSetting.address;
    const tel = data.datoCmsSetting.tel;
    const mail = data.datoCmsSetting.mail;

  return (
    <FooterWrapper>
        <Adress>
            <p>{adress}</p>
        </Adress>
        <Social>
        {data.datoCmsSetting.socialMedia.map(({ socialMediaPlatform, socialMediaLink, id }) => {
                return (
                    <li><a key={id} href={socialMediaLink}>{socialMediaPlatform}</a></li>
                )
                })}
        </Social>
        <Info>
            <a href={'tel:' + tel}>{tel}</a>
            <a href={'mailto:' + mail}>{mail}</a>
        </Info>
        <Politicas>
            <Link to='/'>Políticas de privacidad</Link>
        </Politicas>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
`;
const Adress = styled.div`

`;
const Social = styled.ul`

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
`;
const Politicas = styled.div`

`;




export default Footer

