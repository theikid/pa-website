import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import '../scss/_landing.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
      {
        datoCmsSite {
          globalSeo {
            siteName
            facebookPageUrl
            fallbackSeo {
              description
            }
            titleSuffix
          }
          locale
        }
      }
  `);

  const { datoCmsSite } = data;
  let siteName = datoCmsSite.globalSeo.siteName;
  let siteTitle = siteName + datoCmsSite.globalSeo.titleSuffix;
  let siteDescription = datoCmsSite.globalSeo.fallbackSeo.description;


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
            <body id="landing" />
        </Helmet>
          <div id="content-wrapper">
            YOP
          </div>
      </>
  );
};

export default Index;
