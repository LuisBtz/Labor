import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostNewsPageEn = ({ data }) => {

  const image = getImage(data.thumbnailCover.asset);
  const date = data.dateField;
  const title = data.title.en;
  const slug = data.slug.current;

  return (
    <PostNewsWrapper
      to={`/en/news/${slug}`}
    >
      <GatsbyImage
        image={image}
      />
      <Text>
        <h5><span className="arrow">↑</span> {title}</h5>
        <p className="caps">{date}</p>
      </Text>
    </PostNewsWrapper>

  )
}

const PostNewsWrapper = styled(Link)`
      width: 33.3333vw;

      /* Mobile */
      @media screen and (max-width: 1024px) {
        width: 50vw;
      }

      @media screen and (max-width: 768px) {
        min-width: 100vw;
        padding-right: 0;
        flex-direction: column;
      }
`


const Text = styled.div`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 5rem;
  padding: 0 1rem;

  h5 {
    margin: 1rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
    width: 100%;

    h5 {
      font-size: var(--headline-6);
      margin-bottom: .5rem;
    }

    p {
      font-size: var(--small);
    }
  }
`


export default PostNewsPageEn