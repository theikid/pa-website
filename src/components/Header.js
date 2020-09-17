import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import Img from 'gatsby-image';
import Branding from './Branding';

import '../scss/content/_header.scss';

const Header = ({linkBack, showNav}) => {
   
    const data = useStaticQuery(graphql`
    {
        datoCmsNavigation {
            linkN1
            linkN2
            linkN3
            linkN4
            linkN5
        }
        datoCmsSocialLink {
            instagram
            linkedin
            facebook
          }
       
        Banner:file(relativePath: { eq: "images/header_image.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 980, maxHeight: 164, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
`);

const {datoCmsNavigation,datoCmsSocialLink,Banner} = data;

    return (
        <>
         <header className="header m-b">
         <div className="logo">
        {(linkBack ? 
        (<Link to="/"
        alt="Retour à l'accueil"
        title="Retour à l'accueil"
        >
            <Branding/></Link>
            ) : (
           <Branding/>
            ))}
        </div>
         <div className={showNav ? 'header_image' : 'header_image no_nav'}>
            <Img
            fluid={Banner.childImageSharp.fluid}
            alt="Banner Paris et Ailleurs"
            fadeIn={false}
            loading="eager"
            />
         </div>
         {showNav && (
            <div className="navigation">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn" id="mobile-menu-btn">
                <div className="navicon"><span className="burger-line"></span></div>
                </label>
                <div className="menu">
                    <ul className="menu-nav">
                        <li><a data-scroll href="#etapes">{datoCmsNavigation.linkN1}</a></li>
                        <li><a data-scroll href="#pourquoi">{datoCmsNavigation.linkN2}</a></li>
                        <li><a data-scroll href="#honoraires">{datoCmsNavigation.linkN3}</a></li>
                        <li><a data-scroll href="#temoignages">{datoCmsNavigation.linkN4}</a></li>
                        <li><a data-scroll href="#contact">{datoCmsNavigation.linkN5}</a></li>
                    </ul>
                    <ul className="menu-rs">
                        <li>
                            <a href={datoCmsSocialLink.instagram} target="_blank" title="Suivez-nous sur Instagram" rel="noopener noreferrer">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1665179 0C17.375 0 20 2.625 20 5.83348214v8.33303576C20 17.375 17.375 20 14.1665179 20H5.83348214C2.625 20 0 17.375 0 14.1665179V5.83348214C0 2.625 2.625 0 5.83348214 0zm0 1.66651786H5.83348214c-2.29850159.00686417-4.16010011 1.86846269-4.16696428 4.16696428v8.33303576c.00686417 2.2985015 1.86846269 4.1601001 4.16696428 4.1669642h8.33303576c2.2985015-.0068641 4.1601001-1.8684627 4.1669642-4.1669642V5.83348214c-.0068641-2.29850159-1.8684627-4.16010011-4.1669642-4.16696428zM10 5c1.3260824 0 2.597852.5267842 3.5355339 1.46446609C14.4732158 7.40214799 15 8.67391755 15 10c0 2.7614237-2.2385763 5-5 5-2.76142375 0-5-2.2385763-5-5 0-2.76142375 2.23857625-5 5-5zm0 1.66651786C8.15978461 6.66848627 6.66848627 8.15978461 6.66651786 10c0 1.3482677.81217685 2.5637762 2.05781375 3.0797359 1.24563691.5159597 2.67942699.2307611 3.63279619-.7226081s1.2385678-2.38715928.7226081-3.63279619C12.5637762 7.47869471 11.3482677 6.66651786 10 6.66651786zm5.4165179-3.33303572c.6903559 0 1.25.55964407 1.25 1.25.0007131.33173873-.1307539.65009565-.3653291.8846709-.2345753.23457524-.5529322.36604227-.8846709.3653291-.690356 0-1.25-.55964406-1.25-1.25 0-.69035593.559644-1.25 1.25-1.25z" fill="#fff"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href={datoCmsSocialLink.facebook} title="Suivez-nous sur Facebook" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.0762195 20v-9.2810458H11V6.89542484H7.0762195V4.93464052c0-.65359477.402439-1.17647059.7713415-1.17647059H11V0H7.847561C5.2652439 0 3.152439 2.22222222 3.152439 5v1.89542484H0v3.82352936h3.152439V20h3.9237805z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href={datoCmsSocialLink.linkedin} title="Suivez-nous sur Linkedin" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.4047151 4.90299824c1.3438114 0 2.4400786-1.09347443 2.4400786-2.43386244C4.8447937 1.1287478 3.7485265 0 2.4047151 0S0 1.1287478 0 2.4691358c0 1.34038801 1.0609037 2.43386244 2.4047151 2.43386244zM10.2554028 20v-8.7477954s1.626719-1.5873016 3.1827111-.7054674c.3182712.1058201.6719057.7407408.6719057 1.1287478V20H18v-8.324515c0-1.76366842-1.0609037-3.66843033-2.6522593-4.55026454-1.4852653-.77601411-3.5717093-.91710759-5.0923379-.14109348v-.63492063H6.2946955V20h3.9607073zm-5.870334 0V6.34920635H.4243615V20h3.9607073z" />
</svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>)}
          </header>
         </>
    );
};

Header.defaultProps = {
    linkBack: false,
    showNav: true
};

export default Header;