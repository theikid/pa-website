import React from 'react';
// import Helmet from 'react-helmet';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import '../scss/_landing.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
      {
        datoCmsSite {
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
            globalSeo {
              siteName
              facebookPageUrl
              titleSuffix
              fallbackSeo {
                description
                image {
                  fixed(width: 1200) {
                    src
                  }
                }
              }
            }
        }
      }
  `);

  const { datoCmsSite } = data;
  let seo = datoCmsSite.globalSeo;
  let siteName = seo.siteName;
  let siteTitle = siteName + seo.titleSuffix;
  let siteDescription = seo.fallbackSeo.description;
  let ogimage = seo.fallbackSeo.image.fixed.src;

  return (
      <>
      <HelmetDatoCms
            htmlAttributes={{
                lang   : 'fr',
                prefix : 'og: http://ogp.me/ns#'
            }}
            favicon={datoCmsSite.faviconMetaTags}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            {/* OpenGraph tags */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:url" content="https://www.parisetailleurs.fr" />
            <meta property="og:description" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogimage} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <body id="landing" />
        </HelmetDatoCms>
          <div id="content-wrapper">
            YOP
          </div>
      </>
  );
};

export default Index;
