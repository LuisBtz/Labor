import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../../assets/images/Logo.png'


// markup
const Header = () => {
    return (
      <NavStyle>
        <ul className="pages">
            <li><Link to='./' >Artistas</Link></li>
            <li><Link to='./' >Exposiciones</Link></li>
            <li><Link to='./' >Publicaciones</Link></li>
            <li><Link to='./' >podcast</Link></li>
            <li><Link to='./' >noticias</Link></li>
            <li><Link to='./' >contacto</Link></li>
        </ul>
        <Link to='./' className="logo">
            <img src={logo} alt="labor" />
        </Link>
        <ul className="lang">
            <li><Link>Español</Link></li>
            <li><Link>English</Link></li>
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
  ul.pages {
      display: grid;
      grid-template-columns: 1fr 1fr;
        a {
        text-transform: uppercase;
        }
  }
  a.logo {
      align-self: center;
      justify-self: center;
      width: 100px;
  }
  ul.lang {
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    justify-self: right;
  }
`;


  export default Header

  