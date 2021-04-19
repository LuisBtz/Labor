import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../../assets/images/logo-labor.svg'


// markup
const Header = () => {

  // var btn = document.getElementById('mobile-button');
  // var pgs = document.querySelector('ul.pages');

  // btn.addEventListener('click', () => {
  //   pgs.classList.toggle('show');
  // });


  return (
    <NavStyle>
      <button id="mobile-button">
        Menu
      </button>
      <ul className="pages">
        <li><Link to='/artists' >Artistas</Link></li>
        <li><Link to='/expositions' >Exposiciones</Link></li>
        <li><Link to='/publications' >Publicaciones</Link></li>
        <li><Link to='/podcasts' >podcast</Link></li>
        <li><Link to='/news' >noticias</Link></li>
        <li><Link to='/contact' >contacto</Link></li>
      </ul>
      <Link to='/' className="logo">
        <img src={logo} alt="labor" id="img" />
      </Link>
      <ul className="lang">
        <li><Link>Español</Link></li>
        <li><Link>English</Link></li>
      </ul>
      <ul className="lang-mobile">
        <li><Link>En</Link></li>
        <li>/</li>
        <li><Link>Es</Link></li>
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
  grid-template-columns: repeat(3, 1fr);
  font-family: var(--ocr);
  z-index: 1010;
  mix-blend-mode: exclusion;

  @media screen and (max-width: 768px) {
    background-color: var(--white);
    mix-blend-mode: inherit;
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
    width: 100px;
      #img {
        width: 98vw;
        position: fixed;
        left: 50%;
        top: 90px;

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
    transition: all .75s ease-in-out;
    width: 100px;
    top: 20px;
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
      display: grid;
      justify-content: left;
      align-self: center;
    }

    ul.pages, ul.lang {
      display: none;
        a {
          color: var(--black);
        }
    }

    ul.pages.show {
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
    }

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
      width: 80px;
    }
  }
`;


export default Header

