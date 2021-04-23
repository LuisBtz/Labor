import React from 'react'
import styled from 'styled-components';

const ColophonModuleEn = ({ data }) => {


  return (

    <ColophonWrapper>
      {data.colophoneText && data.colophoneText.en &&
        (data.colophoneText.en ? <Colophon>
          <h4 className="small bold"><span className="arrow">↓</span>COLOPHON</h4>
          <p className="small">{data.colophoneText.en}</p>
        </Colophon> : '')
      }

      {data.technicalInfo && data.technicalInfo.en &&
        (data.technicalInfo.en ?
          <Info>
            <h4 className="small bold"><span className="arrow">↓</span>TECHNICAL INFORMATION</h4>
            <p className="small">{data.technicalInfo.en}</p>
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

export default ColophonModuleEn