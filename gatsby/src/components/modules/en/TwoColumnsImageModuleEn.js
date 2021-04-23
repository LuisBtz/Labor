import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TwoColumnsImageModuleEn = ({ data }) => {

  const imageOneGatsby = getImage(data.imageOne.asset);
  const imageTwoGatsby = getImage(data.imageTwo.asset);

  return (

    <TwoColumnsWrapper>

      <ColumnOne>
        {data.imageOne &&
          (data.imageOne.alternativeText ?
            <GatsbyImage
              image={imageOneGatsby}
              alt={data.imageOne.alternativeText}
            />
            : <GatsbyImage
              image={imageOneGatsby}
              alt='Labor Image'
            />)
        }

        {data.imageOne && data.imageOne.caption && data.imageOne.caption.en &&
          (data.imageOne.caption.en ?
            <p className="detail">{data.imageOne.caption.en}</p>
            : '')
        }


      </ColumnOne>

      <ColumnTwo>
        {data.imageTwo &&
          (data.imageTwo.alternativeText ?
            <GatsbyImage
              image={imageTwoGatsby}
              alt={data.imageTwo.alternativeText}
            />
            : <GatsbyImage
              image={imageTwoGatsby}
              alt='Labor Image'
            />)
        }

        {data.imageTwo && data.imageTwo.caption && data.imageTwo.caption.en &&
          (data.imageTwo.caption.en ?
            <p className="detail">{data.imageTwo.caption.en}</p>
            : '')
        }
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
      margin: 2rem auto;
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

export default TwoColumnsImageModuleEn