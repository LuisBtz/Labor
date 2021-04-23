import React from "react"
import { Normalizer } from "../../styles/Normalizer"
import { GlobalStyle } from "../../styles/GlobalStyle"
import { Typography } from "../../styles/Typography"
import HeaderEn from './headerEn'
import FooterEn from "./footerEn"



function LayoutEn({ children, scroll, indexTrue }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <HeaderEn scroll={scroll} indexTrue={indexTrue} />
      <main>{children}</main>
      <FooterEn />
    </>
  )
}


export default LayoutEn