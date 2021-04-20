import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const TwoColumnsImageModule = () => {

  return (

    <TwoColumnsWrapper>

      <ColumnOne>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="detail">caption 1</p>
      </ColumnOne>

      <ColumnTwo>
        <StaticImage
          src="https://images.unsplash.com/photo-1618769089518-e2e94ef970c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="detail">caption 2</p>
      </ColumnTwo>

    </TwoColumnsWrapper>

  )
}

const TwoColumnsWrapper = styled.section`
    width: 100%;
    display: flex;
    margin: 5rem auto;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    p {
      padding: .5rem;
    }
`

const ColumnOne = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`
const ColumnTwo = styled.div`
    width: 100%;
`

export default TwoColumnsImageModule