import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"
import Header from '../layout/header'
import styled from 'styled-components';
import Footer from "./footer"



function Layout({ children }) {
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}


const Main = styled.main`
    background: var(--white);
    padding-top: 90px;

    @media screen and (max-width: 768px) {
      padding-top: 60px;
    }
  `


export default Layout