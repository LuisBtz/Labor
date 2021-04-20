import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const FullImageModule = () => {

  return (

    <FullImageWrapper>
      <StaticImage
        src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <p className="detail">caption</p>
    </FullImageWrapper>

  )
}

const FullImageWrapper = styled.section`
  p {
    padding: .5rem;
  }
`

export default FullImageModule