import * as React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { Link } from "gatsby"


// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound>
        <h1>página no encontrada.<br />(error 404 <span aria-label='emoji' role="img">😵</span>)</h1>
        <Link to='/'>Regresar a inicio</Link>
      </NotFound>
    </Layout>
  )
}

const NotFound = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 90vh;

  h1 {
    text-align: center;
    font-family: var(--bold);
  }

  a {
    padding: .5rem 1rem;
    border: solid 1px black;
    border-radius: .5rem;
    margin-top: 3rem;

      :hover {
        background: black;
        color: white;
      }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: var(--headline-3);
    }
  }
`

export default NotFoundPage
