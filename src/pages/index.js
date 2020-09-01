import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import '../scss/main.scss';

import Carousel from '../components/Carousel';

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
        datoCmsQuote {
          image {
            fluid(maxWidth: 1920, maxHeight: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
          }
          quote
        }
        allInstaNode(limit: 6, sort: {fields: timestamp, order: DESC}) {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400, fit: COVER, cropFocus: CENTER, quality: 100) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  `);

  const { datoCmsSite, datoCmsQuote, allInstaNode } = data;
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
          <div id="global-wrapper">
            <section id="quote" className="m-b">
                <div id="quote-text" dangerouslySetInnerHTML={{ __html: datoCmsQuote.quote }}></div>
                    <div id="quote-bg">
                        <Img
                            fluid={datoCmsQuote.image.fluid}
                        />
                    </div>
            </section>
            <section id="instagrid" className="container m-b">
            <h3>Suivez-nous sur Instagram !</h3>
                <Carousel
                    infinite={false}
                    slidesToShow={6}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                >
                      {allInstaNode.edges.map(({node}) => {

                        return (
                            <div key={node.id}>
                                  <Img
                                  fluid={node.localFile.childImageSharp.fluid}
                              />
                            </div>
                        );
                    })}
                 </Carousel>
            </section>
          </div>
          <footer><div className="container">© Paris et ailleurs 2020 - Tous droits réservés</div></footer>
      </>
  );
};

export default Index;
