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
    grid-gap: 5rem;
    padding: 20px;
    font-family: 'OCR A', monospace;
    text-transform: uppercase;

    /* Mobile */
    @media screen and (max-width: 768px) {
      grid: none;
      grid-gap: 2rem;
    }
`;
const Adress = styled.div`
  p {
    font-size: .75rem;
  }
`;
const Social = styled.ul`
  li, a {
    font-size: .75rem;
  }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    a {
      font-size: .75rem;
    }
`;
const Politicas = styled.div`
  a {
    font-size: .75rem;
  }
`;




export default Footer

