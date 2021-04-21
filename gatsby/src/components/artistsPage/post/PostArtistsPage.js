import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostArtistsPage = ({ data }) => {

  const image = getImage(data.thumbnail.asset);
  const name = data.name;
  const slug = data.slug.current;

  return (
    <PostArtistsWrapper>
      <Link
        to={`/artists/${slug}`}
      > <GatsbyImage image={image} />
        <span className="arrow">↖</span>
        {name}
      </Link>
    </PostArtistsWrapper>

  )
}

const PostArtistsWrapper = styled.section`
  margin-right: 1rem;
  margin-bottom: .5rem;

  a {
    font-size: var(--headline-2);
    text-transform: uppercase;
    line-height: 100%;
    display: flex;
  }

  .gatsby-image-wrapper {
    width: 5rem;
    margin-right: .5rem;
  }

  .arrow {
    margin-right: .5rem;
  }

  @media screen and (max-width: 1150px) {
    a {
      font-size: var(--headline-3);
    }
  }

  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    margin-right: 0;
    display: flex;


    a {
      white-space: nowrap;
      margin-right: 2rem;
    }

    .gatsby-image-wrapper {
      width: 3.75rem;
      margin-right: .5rem;
    }
  }
`


export default PostArtistsPage