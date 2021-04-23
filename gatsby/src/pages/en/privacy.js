import React from "react"
import LayoutEn from "../../components/layout/en/layoutEn"
import Seo from "../../components/layout/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from '@sanity/block-content-to-react';


// markup
const Privacy = () => {

  const data = useStaticQuery(graphql`
    query  {
        sanityPrivacy {
            title {
                en
            }
            _rawPrivacyTextEn
        }
    }
    `)

  // const adress = data.datoCmsSetting.address;
  // const tel = data.datoCmsSetting.tel;
  // const mail = data.datoCmsSetting.mail;
  const title = data.sanityPrivacy.title.en;
  const body = data.sanityPrivacy._rawPrivacyTextEn;

  return (
    <LayoutEn>
      <Seo title={data.sanityPrivacy.title && title} />
      <BodyTextWrapper>
      <h5 className="bold">{title}</h5>
        <p>
          <BlockContent
            blocks={body}
          />
        </p>
    </BodyTextWrapper>
    </LayoutEn>
  )
}

const BodyTextWrapper = styled.section`
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 5rem 0;

    p {
      width: 50%;
      padding: 0 .5rem;
      line-height: 140%;
    }

    h5 {
      width: 25%;
      padding: 0 .5rem;

        @media screen and (max-width: 980px) {
          width: 35%;
        }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      p, h5 {
        width: 100%;
        margin: .5rem 0;
      }
    }
`
export default Privacy;
