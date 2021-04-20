import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const CarouselModule = () => {

  return (

    <CarouselWrapper>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item><Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
      <Item>
        <StaticImage
          src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
        <p className="small caps">Título de Foto, 2021. Óleo sobre canvas. Fotografía por Kristell Henry</p>
      </Item>
    </CarouselWrapper>

  )
}

const CarouselWrapper = styled.section`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 5rem auto;
`

const Item = styled.div`
  min-width: 46vw;

  p {
    padding: .5rem;
    max-width: 85%;
  }
`

export default CarouselModule