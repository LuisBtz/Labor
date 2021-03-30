import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
      --black: #000000;
      --white: #FFFFFF;
    }

    body {
        background-color: var(--white);
        font-family: var(--regular);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
    }
`
