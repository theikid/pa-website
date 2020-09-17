import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import {useStaticQuery, graphql} from 'gatsby';
import '../scss/main.scss';
import '../scss/content/_terms.scss';

import Header from '../components/Header';
import Footer from '../components/Footer'


const MentionLegales = () => {
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
        datoCmsLegalNotice {
          title
          mentions
        }
      }
  `);

  const { datoCmsSite, datoCmsLegalNotice} = data;
  let seo = datoCmsSite.globalSeo;
  let siteName = seo.siteName;
  let siteTitle = siteName + seo.titleSuffix;
  let siteDescription = seo.fallbackSeo.description;
  let ogimage = seo.fallbackSeo.image.fixed.src;
  // const instaurl = "https://www.instagram.com/p/";

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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
            <body id="landing" />
        </HelmetDatoCms>

          <div id="global-wrapper">
          <Header 
            linkBack={true}
            showNav={false}
          />
            <section id="mentions_legales" className="container m-b">
              <h1>{datoCmsLegalNotice.title}</h1>
              <div className="legals-wrapper" dangerouslySetInnerHTML={{ __html: datoCmsLegalNotice.mentions }}></div>
            </section>
            <Footer/>
          </div>
      </>
  );
};

export default MentionLegales;
