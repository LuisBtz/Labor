import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';


const BodyTextModule = ({ data }) => {


  return (
    <BodyTextWrapper>
      <h5 className="bold">

        {data.es && data.es.headline &&
          (data.es.headline ? data.es.headline : '')
        }

      </h5>
      <div className="body-text">
        {data.es && data.es._rawParagraph &&
          (data.es._rawParagraph ?
            <BlockContent
              blocks={data.es._rawParagraph}
            />
            : '')
        }
      </div>
    </BodyTextWrapper>
  );
};

const BodyTextWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;

  .body-text {
    width: 50%;
    padding-right: 1.5rem;
  }

  p {
    width: 100%;
    padding: 0.5rem;
    line-height: 142%;
  }

  h5 {
    width: 25%;
    padding: 0 0.5rem 0 1rem;

    @media screen and (max-width: 980px) {
      width: 35%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2rem auto;

    .body-text {
      width: 100%;
      padding: 0 .5rem;
    }
    p,
    h5 {
      width: 100%;
      margin: 0.5rem 0;
    }
  }
`;

export default BodyTextModule;
