import React from 'react'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


// markup
const PostPodcastsPage = ( {data } ) => {

  const image = getImage(data.coverThumbnailImage);
  const slug = data.slug;

    return (
      <PostPodcastsWrapper>
        <Link
            to={`/podcasts/${slug}`}
        > <GatsbyImage image={image}  /></Link>
    </PostPodcastsWrapper>
      
    )
  }

  const PostPodcastsWrapper = styled.div`


`



  export default PostPodcastsPage