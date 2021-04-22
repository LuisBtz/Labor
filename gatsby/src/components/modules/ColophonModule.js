import React from 'react'
import styled from 'styled-components';

const ColophonModule = ({ data }) => {


  return (

    <ColophonWrapper>
      {data.colophoneText && data.colophoneText.es &&
        (data.colophoneText.es ? <Colophon>
          <h4 className="small bold"><span className="arrow">↓</span>COLOPHON</h4>
          <p className="small">{data.colophoneText.es}</p>
        </Colophon> : '')
      }

      {data.technicalInfo && data.technicalInfo.es &&
        (data.technicalInfo.es ?
          <Info>
            <h4 className="small bold"><span className="arrow">↓</span>TECHNICAL INFORMATION</h4>
            <p className="small">{data.technicalInfo.es}</p>
          </Info> : '')
      }


    </ColophonWrapper>

  )
}

const ColophonWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 5rem auto;

  @media screen and (max-width: 768px) {
    margin: 2rem auto;
  }

  h4 {
    margin-bottom: .5rem;
  }
`
const Colophon = styled.div`
  width: 25%;
  padding: 1rem;

    @media screen and (max-width: 768px){
      width: 100%;
    }
`

const Info = styled.div`
  width: 25%;
  padding: 1rem;

    @media screen and (max-width: 768px){
      width: 100%;
    }
`

export default ColophonModule