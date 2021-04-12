import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostArtistsPage = ( {data } ) => {

  const image = getImage(data.thumbnailImage);
  const name = data.name;
  const slug = data.slug;

    return (
      <PostArtistsWrapper>
        <Link
          to={`/artists/${slug}`}
        > <GatsbyImage image={image}  />{name}</Link>
    </PostArtistsWrapper>
      
    )
  }

  const PostArtistsWrapper = styled.div`


`



  export default PostArtistsPage