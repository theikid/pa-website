import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage, getImage } from "gatsby-plugin-image";
import Img from 'gatsby-image';
import '../scss/main.scss';


import Carousel from '../components/Carousel';
import ContactCard from '../components/ContactCard';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
              }
            }
        }
        datoCmsIntro {
          introTitle
          introText
          photo {
            fluid(maxWidth: 1400, maxHeight: 1580, imgixParams: { fm: "jpg", auto: "format" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        bird:file(relativePath: { eq: "images/bird.jpg" }) {
          childImageSharp {
              fixed(width: 64, height: 56, quality: 85) {
                  ...GatsbyImageSharpFixed_withWebp
              }
          }
        }
        datoCmsRencontre {
          titre
          texte
        }
        datoCmsStep {
          titre
          soustitre
          steps {
            originalId
            title
            text
            photo {
              fluid(maxWidth: 580, maxHeight: 580, imgixParams: { fm: "jpg", auto: "format" }) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
        datoCmsPourquoi {
          titre
          pourquoiItem {
            originalId
            titre
            texte
          }
        }
        datoCmsHonoraire {
          titre
          sousTitre
          description
          tableau {
            originalId
            montant
            pourcentage
          }
          titreCharteDeDeontologie
          texteCharteDeDeontologie
        }
        datoCmsTestimony {
          titre
          imagesTestimonies {
            alt
            title
            originalId
            fluid(maxWidth: 480, maxHeight: 600, imgixParams: { fm: "jpg", auto: "format" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        datoCmsContactblock {
          titre
          contacts {
            originalId
            nom
            biographie
            email
            telephone
            photo {
                fluid(maxWidth: 513, maxHeight: 513, imgixParams: { fm: "jpg", auto: "format" }) {
                  ...GatsbyDatoCmsFluid
                }
                title
                alt
            }
          }
        }
        datoCmsVideosIgtv {
          titre
          videoItem {
            originalId
            url
            buttonPlay
            thumbnail {
              fluid(maxWidth: 480, maxHeight: 480, imgixParams: { fm: "jpg", auto: "format" }) {
                ...GatsbyDatoCmsFluid
              }
              alt
            }
          }
        }
        datoCmsQuote {
          image {
            fluid(maxWidth: 1920, maxHeight: 800, imgixParams: { fm: "jpg", auto: "format" }) {
                ...GatsbyDatoCmsFluid
            }
          }
          quote
        }
        allInstagramContent(limit: 18, sort: {fields: timestamp, order: DESC}) {
          edges {
            node {
              id
              thumbnail_url
              permalink
              localImage {
                childImageSharp {
                  gatsbyImageData(width: 500, aspectRatio: 1)
                }
              }
            }
          }
        }
      }
  `);

  const { datoCmsSite, bird, datoCmsIntro, datoCmsRencontre, datoCmsStep, datoCmsPourquoi, 
    datoCmsHonoraire, datoCmsTestimony, datoCmsContactblock, datoCmsVideosIgtv, datoCmsQuote, allInstagramContent } = data;
  let seo = datoCmsSite.globalSeo;
  let siteName = seo.siteName;
  let siteTitle = siteName + seo.titleSuffix;
  let siteDescription = seo.fallbackSeo.description;

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
            <meta property="og:image" content="https://www.datocms-assets.com/32166/1598479751-4938487721484651854671022327994384647192576o.png?auto=format&w=1200" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
            <body id="landing" />
        </HelmetDatoCms>

          <div id="global-wrapper">
          <Header 
            linkBack={false}
            showNav={true}
          />
          <section id="intro">
              <div className="intro-bg">
              <div className="intro-wrapper container">
              <div className="intro-content">
                  <h1 className="m-b" dangerouslySetInnerHTML={{ __html: datoCmsIntro.introTitle}}></h1>
                  <p>{datoCmsIntro.introText}</p>
              </div>
              </div>
              </div>
               <div className="intro-image">
                  <Img
                        fluid={datoCmsIntro.photo.fluid}
                        // alt={video.thumbnail.alt}
                        // title={video.thumbnail.title}
                  />
              </div>
          </section>
         
          <section id="rencontre" className="container p-t m-b-xl">
          <div className="bird">
            <Img
            fixed={bird.childImageSharp.fixed}
            />
        </div>
            <h2 className="m-b">{datoCmsRencontre.titre}</h2>
            <div className="rencontre-content" dangerouslySetInnerHTML={{ __html: datoCmsRencontre.texte}}></div>
          </section>
          <section id="etapes">
                <div className="etapes-wrapper container p-t p-b">
                    <h2 className="m-b">{datoCmsStep.titre}</h2>
                    <h3>{datoCmsStep.soustitre}</h3>
                    <div className="etapes-grid">
                  {datoCmsStep.steps.map((stepItem, index) => {
                      index = "0" + (index + 1) + ".";
                      return (
                        <div key={stepItem.originalId} className="step-item">
                            <span className="item-number">{index}</span>
                            <div className="step-inner">
                              <Img
                                  fluid={stepItem.photo.fluid}
                                  // alt={video.thumbnail.alt}
                                  // title={video.thumbnail.title}
                              />
                              <h4>{stepItem.title}</h4>
                              <p>{stepItem.text}</p>
                            </div>
                        </div>
                      )
                  })}
              </div>
                </div>
            </section>
            <section id="pourquoi" className="container p-t m-b">
              <h2 className="m-b">{datoCmsPourquoi.titre}</h2>
              <div className="blocks-wrapper">
                  {datoCmsPourquoi.pourquoiItem.map(pourquoiItem => {
                                          return (
                                            <div key={pourquoiItem.originalId} className="blocks-item"><h4>{pourquoiItem.titre}</h4><p>{pourquoiItem.texte}</p></div>
                                        )
                  })}
              </div>
            </section>
            <section id="honoraires">
                <div className="honoraires-wrapper container p-t p-b">
                    <h2 className="m-b">{datoCmsHonoraire.titre}</h2>
                    <h3>{datoCmsHonoraire.sousTitre}</h3>
                    <div className="description" dangerouslySetInnerHTML={{ __html: datoCmsHonoraire.description}}></div>
                    <ul className="tableau_honoraires">
                    {datoCmsHonoraire.tableau.map(tableauitem => {
                                      return (
                                        <li key={tableauitem.originalId}><span className="honoraires_montant">{tableauitem.montant}</span><span className="honoraires_pourcentage">{tableauitem.pourcentage}</span></li>
                                    )
                            })}
                    </ul>
                    <div id="charte-deontologie" className="m-t">
                    <h4><span>{datoCmsHonoraire.titreCharteDeDeontologie}</span></h4>
                    <div className="charte-text" dangerouslySetInnerHTML={{ __html: datoCmsHonoraire.texteCharteDeDeontologie}}></div>
                </div>
                </div>
            </section>
            <section id="temoignages">
            <div className="temoignages-wrapper container p-t p-b">
                <h2 className="m-b">{datoCmsTestimony.titre}</h2>
                <Carousel
                    infinite={false}
                    arrows={false}
                    slidesToShow={3}
                    slidesToScroll={3}
                    autoplay={false}
                    autoplaySpeed={4000}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
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
                      {datoCmsTestimony.imagesTestimonies.map(testimony => {
                              return (
                                  <div className="temoignage" key={testimony.originalId} >
                                      <Img
                                          fluid={testimony.fluid}
                                          // alt={video.thumbnail.alt}
                                          // title={video.thumbnail.title}
                                      />
                                  </div>
                            )
                    })}
                </Carousel>
                
            </div>
            </section>
            <section id="contact" className="container p-t">
                <h2 className="m-b">{datoCmsContactblock.titre}</h2>
                <div className="contact-cards-wrapper">
                    {datoCmsContactblock.contacts.map(contactblock => {
                              return (
                                <ContactCard contactinfos={contactblock} key={contactblock.originalId} />
                            )
                    })}
                </div>
            </section>
            <section id="videos" className="container p-t m-b">
                    <h4><span>{datoCmsVideosIgtv.titre}</span></h4>
                    <Carousel
                    infinite={false}
                    arrows={false}
                    slidesToShow={3}
                    slidesToScroll={3}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
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
                      {datoCmsVideosIgtv.videoItem.map(video => {
                        let btnplay_theme = "light";
                        btnplay_theme = video.buttonPlay.toLowerCase();
                              return (
                                <div className="thumb-wrapper" key={video.originalId}>
                                  <a href={video.url} target="_blank" rel="noreferrer">
                                  <div className={"btn-play " + btnplay_theme}>
                                  <svg width="20" height="26" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.605 13.906L1.67 24.914A1.081 1.081 0 010 24.008V1.992a1.081 1.081 0 011.67-.906l16.935 11.008a1.081 1.081 0 010 1.812z" fillRule="evenodd"/>
</svg>
                                  </div>
                                  <div className="thumbnail">
                                      <Img
                                          fluid={video.thumbnail.fluid}
                                          // alt={video.thumbnail.alt}
                                          // title={video.thumbnail.title}
                                      />
                                  </div>
                                  </a>
                                </div>
                            )
                    })}
                </Carousel>
            </section>
            <section id="quote">
                <div id="quote-text" dangerouslySetInnerHTML={{ __html: datoCmsQuote.quote }}></div>
                    <div id="quote-bg">
                        <Img
                            fluid={datoCmsQuote.image.fluid}
                        />
                    </div>
            </section>
            <section id="instagrid" className="container p-t m-b">
              <h3>Suivez-nous sur Instagram !</h3>
              <Carousel
                  infinite={false}
                  arrows={false}
                  slidesToShow={6}
                  slidesToScroll={6}
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
                    {allInstagramContent.edges.slice(0,12).map(({node}) => {
                      const image = getImage(node.localImage);
                      if (typeof image !== 'undefined') {
                        return (
                            <div key={node.id}>
                                <a href={node.permalink} target="_blank" rel="noreferrer"  >
                                    <GatsbyImage
                                        image={image}
                                        alt="Voir sur Instagram"
                                        title="Voir sur Instagram"
                                    />
                                    
                                </a>
                            </div>
                        );
                      } else {
                        return (null);
                      }
                    })}
              </Carousel>
            </section>
            <Footer/>
          </div>
      </>
  );
};

export default Index;
