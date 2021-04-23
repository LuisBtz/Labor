import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
// import { Helmet } from "react-helmet";
import logo from '../../assets/images/logo-labor.svg'


// markup
const Header = ( {scroll , indexTrue} ) => {

  var pathLink = window.location.pathname

  const languages = ['es', 'en']

  const [nav, showNav] = useState(false);


  console.log(scroll, 'Scrollllll')

  return (
    <NavStyle>
      {/* <Helmet>
        <script src="https://www.fernandaruiz.work/projects/labor/navigation.js" type="text/javascript" />
      </Helmet> */}
      <button id="mobile-button" onClick={() => showNav(!nav)} >
        Menu
      </button>
      <ul className="pages" nav={nav}>
        <li><Link to='/artists' >Artistas</Link></li>
        <li><Link to='/expositions' >Exposiciones</Link></li>
        <li><Link to='/publications' >Publicaciones</Link></li>
        <li><Link to='/podcasts' >Perfume</Link></li>
        <li><Link to='/news' >Noticias</Link></li>
        <li><Link to='/contact' >Contacto</Link></li>
      </ul>
      {
        nav && (<ul className="pagesResp" nav={nav}>
          <li><Link to='/artists' >Artistas</Link></li>
          <li><Link to='/expositions' >Exposiciones</Link></li>
          <li><Link to='/publications' >Publicaciones</Link></li>
          <li><Link to='/podcasts' >Perfume</Link></li>
          <li><Link to='/news' >Noticias</Link></li>
          <li><Link to='/contact' >Contacto</Link></li>
        </ul>)
      }
      {indexTrue ? 
      <Link to='/' className="logo">
        <img id='img' src={logo} alt="labor" className={scroll ? 'shrink' : ''} />
      </Link> 
      : 
      <Link to='/' className="logo">
        <img src={logo} alt="labor" />
      </Link> 
      }
      
      <ul className="lang">
      {languages.map((lng,) => (
          <li key={lng}>
            <Link to={lng === 'es' ? pathLink : '/en'+pathLink} language={lng}>
            {lng === 'es' ? 'Español' : 'English'}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="lang-mobile">
      {languages.map((lng) => (
          <li key={lng}>
            <Link to={lng === 'es' ? pathLink : '/en'+pathLink} language={lng}>
              {lng === 'es' ? 'Es/' : 'En'}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  font-family: var(--ocr);
  z-index: 1010;
  mix-blend-mode: exclusion;

  @media screen and (max-width: 768px) {
    background-color: var(--white);
    mix-blend-mode: inherit;
    padding: .5rem 1rem;
    height: 56px;
  }

  ul.pages {
    display: grid;
    grid-template-columns: 1fr 1fr;
      a {
        font-size: 0.85rem;
        line-height: 100%;
        text-transform: uppercase;
        color: var(--white);
          :hover{
            text-decoration: line-through;
          }
      }
      li {
        line-height: 100%;
      }
  }
  a.logo {
    align-self: auto;
    justify-self: center;
    line-height: 0;
    width: 100px;
      #img {
        width: 98vw;
        position: fixed;
        left: 50%;
        top: 90px;

        transition: all .75s ease-in-out;
        transform: translateX(-50%);

        @media screen and (max-width: 768px) {
          width: 90vw;
        }
      }

      @media screen and (max-width: 768px) {
        img {
          filter: invert(1);
        }
      }
  }
  a.logo #img.shrink {
    width: 100px;
    top: 20px;

      @media screen and (max-width: 768px) {
        top: 18px;
      }
  }
  ul.lang, ul.lang-mobile {
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    justify-self: right;
      li {
        line-height: 100%;
      }
      a {
        text-transform: uppercase;
        color: var(--white);
        line-height: 100%;
        font-size: 0.85rem;
      }
  }
  #mobile-button {
    display: none;
    -webkit-appearance: none;
    background: transparent;
    box-shadow: none;
    border: none;
    color: var(--white);
    mix-blend-mode: exclusion;
    font-family: 'OCR A';
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
  }

  #mobile-button:focus {
    outline: 0;
  }

  ul.lang-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    #mobile-button {
      height: 100%;
      display: block;
      text-align:left;
      padding-top: .25rem;
    }

    ul.pages {
      display: none;
    }

    ul.pagesResp {
      z-index: 1010;
      display: block;
      position: fixed;
      background: white;
      left: 0;
      width: 100%;
      top: 3.5rem;
      border-top: solid 1px #f2f2f2;

        a {
          display: block;
          padding: 1rem;
          color: var(--black);
          text-transform: uppercase;
          line-height: 100%;
          border-bottom: solid 1px #f2f2f2;
        }
    }

    ul.lang {
      display: none;
      a {
          color: var(--black);
        }
    }

    /* ul.pages.show {
      z-index: 1010;
      display: block;
      position: fixed;
      background: white;
      left: 0;
      padding: 1rem;
      width: 100%;
      top: 3.5rem;
      border-top: solid 1px #f2f2f2;

        li {
          padding: .5rem 0;
        }
    } */

    ul.lang-mobile {
      display: flex;
      align-items: center;
      
        li, a {
          color: var(--black);
        }
    }

    a.logo #img {
      top: 60px;
    }

    a.logo, a.logo #img.shrink {
      width: 72px;
    }
  }
`;


export default Header

