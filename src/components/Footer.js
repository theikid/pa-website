import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';

import '../scss/content/_footer.scss';

const Footer = () => {
   
    const data = useStaticQuery(graphql`
    {
        datoCmsFooter {
            mention
            footerNav {
              titreDuLien
              link
              originalId
            }
          }
      }
`);

const {datoCmsFooter} = data;

    return (
        <>
         <footer>
                <div className="container">
                    <div className="left-mention">{datoCmsFooter.mention}</div>
                    <div className="footer-nav">
                        <ul>
                        {datoCmsFooter.footerNav.map(navItem => {
                              return (
                              <li key={navItem.originalId}><Link to={'/' + navItem.link}>{navItem.titreDuLien}</Link></li>
                            )
                        })}
                        </ul>
                    </div>
                  </div>
            </footer>
         </>
    );
};

export default Footer;