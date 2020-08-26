import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import '../scss/_landing.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
      {
        datocms {
          _site {
            favicon {
              url
            }
            globalSeo {
              siteName
              facebookPageUrl
              titleSuffix
              fallbackSeo {
                description
              }
            }
          }
        }
      }
  `);

  const { datocms } = data;
  let seo = datocms._site.globalSeo;
  let siteName = seo.siteName;
  let siteTitle = siteName + seo.titleSuffix;
  let siteDescription = seo.fallbackSeo.description;
  let favicon = datocms._site.favicon.url;


  return (
      <>
      <Helmet
            htmlAttributes={{
                lang   : 'fr',
                prefix : 'og: http://ogp.me/ns#'
            }}
        >
            {/* General tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            {/* OpenGraph tags */}
            <meta property="og:site_name" content={siteTitle} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <link rel="apple-touch-icon" href={favicon + "?h=180&w=180"} sizes="180x180" />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon + "?h=16&w=16"} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon + "?h=32&w=32"} />
            <body id="landing" />
        </Helmet>
          <div id="content-wrapper">
            YOP
          </div>
      </>
  );
};

export default Index;
