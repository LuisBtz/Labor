import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostNewsPage = ( {data } ) => {

  const image = getImage(data.coverThumbnailImage);
  const date = data.meta.createdAt;
  const title = data.articleHeadline;
  const slug = data.slug;

    return (
      <PostNewsWrapper
      to={`/publications/${slug}`}
      >
        <GatsbyImage
            image={image}
            />
            <Text>
              <h5>{title}</h5>
              <p className="caps">{date}</p>
            </Text>
    </PostNewsWrapper>
      
    )
  }

  const PostNewsWrapper = styled(Link)`
      width: 33.3333vw;

      /* Mobile */
      @media screen and (max-width: 768px) {
        min-width: 100vw;
        padding-right: 0;
        flex-direction: column;
      }
`


const Text = styled.div`
  box-sizing: border-box;
  margin-top: 1rem;
  margin-bottom: 5rem;
  padding: .5rem 1rem;

  h5 {
    margin: 1rem 0;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
    width: 100%;
  }
`


  export default PostNewsPage