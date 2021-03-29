import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"
import Header from '../layout/header'
import styled from 'styled-components';



function Layout({ children }) {
    return (
      <>
        <Normalizer />
        <Typography />
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
      </>
    )
  }
  

  const Main = styled.main`
    margin-top: 90px;
  `


  export default Layout