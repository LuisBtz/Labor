// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import inlineFullImage from './objects/inline/inlineFullImage'
import imageInline from './objects/inline/imageInline'
import recentNews from './objects/inline/recentNews'
import newLocale from './objects/inline/newLocale'
import exhibitionH from './objects/inline/exhibitionLocale'
import socialNetwork from './objects/inline/socialNetwork'
import artistH from './objects/inline/artistH'
import publicationsH from './objects/inline/publicationsH'
import marqueeInline from './objects/inline/marqueeInline'
import thumbnailLocale from './objects/inline/thumbnailLocale'


import captionLocale from './objects/locales/captionLocale'
import textField from './objects/locales/textField'
import buttons from './objects/locales/buttons'
import buttonLocale from './objects/locales/buttonLocale'
import bodyTextLocale from './objects/locales/bodyTextLocale'
import quoteText from './objects/locales/quoteLocale'
import imageCarouselEditorial from './objects/inline/inlineImageCarousel'
import colophoneText from './objects/locales/colophoneLocale'
import technicalInfo from './objects/locales/technicalInfoLocale'
import textAreaLocale from './objects/locales/textAreaLocale'
import seoTitleEn from './objects/locales/seoTitleLocaleEn'
import seoTitleEs from './objects/locales/seoTitleLocaleEs'
import positionLocale from './objects/locales/positionLocale'
import marqueeLocaleEn from './objects/locales/marqueeLocaleEn'
import marqueeLocaleEs from './objects/locales/marqueeLocaleEs'
import metaLocale from './objects/locales/metaLocale'
import fromLocale from './objects/locales/fromLocale'
import abstractLocale from './objects/locales/abstractLocale'


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
import zoom from './objects/editorialModules/zoom'

import metadata from './documents/settings/metadata'
import editorialModule from './objects/editorialModules'
import blockModule from './objects/blocks'
import seoModule from './objects/seoModule'
import teamContact from './objects/teamContact'

import homePage from './documents/homePage'
import artists from './documents/artists'
import exhibitions from './documents/exhibitions'
import publications from './documents/publications'
import podcast from './documents/podcast'
import news from './documents/news'
import contact from './documents/contact'
import privacy from './documents/privacy'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    inlineFullImage,
    imageInline,
    imageCarouselEditorial,
    recentNews,
    newLocale,
    exhibitionH,
    socialNetwork,
    artistH,
    marqueeInline,
    publicationsH,
    thumbnailLocale,

    captionLocale,
    textField,
    buttons,
    buttonLocale,
    bodyTextLocale,
    quoteText,
    colophoneText,
    technicalInfo,
    textAreaLocale,
    seoTitleEn,
    seoTitleEs,
    positionLocale,
    marqueeLocaleEn,
    marqueeLocaleEs,
    metaLocale,
    fromLocale,
    abstractLocale,
    zoom,

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
    editorialModule,
    blockModule,
    seoModule,
    teamContact,

    homePage,
    artists,
    exhibitions,
    publications,
    podcast,
    news,
    contact,
    privacy,
  ]),
})
