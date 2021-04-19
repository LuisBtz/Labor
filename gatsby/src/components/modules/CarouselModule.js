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
            <p>caption</p>
          </Item>
          <Item>
            <StaticImage
            src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fullWidth"
            />
            <p>caption</p>
          </Item>
          <Item>
            <StaticImage
            src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fullWidth"
            />
            <p>caption</p>
          </Item>
          <Item>
            <StaticImage
            src="https://images.unsplash.com/photo-1497369542358-287e35b2ce4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="A dinosaur"
            placeholder="blurred"
            layout="fullWidth"
            />
            <p>caption</p>
          </Item>
          
        
        
        
      </CarouselWrapper>
  
    )
  }

const CarouselWrapper = styled.section``

const Item = styled.div``

  export default CarouselModule