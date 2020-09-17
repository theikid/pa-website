import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Branding = () => {

    const data = useStaticQuery(graphql`
    {
        Logo:file(relativePath: { eq: "images/paris_et_ailleurs_logo.png" }) {
            childImageSharp {
                fluid(maxWidth: 340, maxHeight: 60, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
      }
`);

const {Logo} = data;

    return (
        <>
        <div>
         <Img
                fluid={Logo.childImageSharp.fluid}
                alt="Logo Paris et Ailleurs"
                fadeIn={false}
                loading="eager"
                />
        <span>Chasseuses immobilier</span>
        </div>
         </>
    );
};

export default Branding;