// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import fullImage from './objects/editorialModules/fullImage'
import mainHeadline from './objects/editorialModules/mainHeadline'
import bodyText from './objects/editorialModules/bodyText'
import imageTwoColumns from './objects/editorialModules/imageTwoColumns'
import quote from './objects/editorialModules/quote'
import carousel from './objects/editorialModules/carousel'
import relatedNews from './objects/editorialModules/relatedNews'
import relatedExhibitions from './objects/editorialModules/relatedExhibitions'
import video from './objects/editorialModules/video'
import colophon from './objects/editorialModules/colophon'
import newsArticleHeader from './objects/editorialModules/newsArticleHeader'

import metadata from './documents/settings/metadata'
import header from './documents/settings/header'
import footer from './documents/settings/footer'
import editorialModule from './objects/editorialModules'
import blockModule from './objects/blocks'
import seoModule from './objects/seoModule'

import homePage from './documents/homePage'
import artists from './documents/artists'
import exhibitions from './documents/exhibitions'
import publications from './documents/publications'
import podcast from './documents/podcast'
import news from './documents/news'
import contact from './documents/contact'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    fullImage,
    mainHeadline,
    bodyText,
    imageTwoColumns,
    quote,
    carousel,
    relatedNews,
    relatedExhibitions,
    video,
    colophon,
    newsArticleHeader,

    metadata,
    header,
    footer,
    editorialModule,
    blockModule,
    seoModule,

    homePage,
    artists,
    exhibitions,
    publications,
    podcast,
    news,
    contact,
  ]),
})
