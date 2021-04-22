import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TwoColumnsImageModule = ( { data } ) => {

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
                />  )
            }

            {data.imageOne && data.imageOne.caption && data.imageOne.caption.es &&
              (data.imageOne.caption.es ? 
                <p className="detail">{data.imageOne.caption.es}</p>
                  : ''  )
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
                />  )
            }

            {data.imageTwo && data.imageTwo.caption && data.imageTwo.caption.es &&
              (data.imageTwo.caption.es ? 
                <p className="detail">{data.imageTwo.caption.es}</p>
                  : ''  )
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