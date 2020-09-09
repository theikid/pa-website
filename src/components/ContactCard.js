import React from 'react';
import Img from 'gatsby-image';

import '../scss/content/_contactCard.scss';



const ContactCard = (props) => {
    const {
        contactinfos
    } = props;

    // let number = contactinfos.telephone.split(' ').join('');
    let number = contactinfos.telephone.replace(/\s/g, '');
    number = number.replace(/\([^()]*\)/g, '');

    return (
        <div className="contact-card" key={contactinfos.originalId}>
                <Img
                        fluid={contactinfos.photo.fluid}
                        // alt={contactinfos.photo.alt}
                        // title={contactinfos.photo.title}
                />
                <h3>{contactinfos.nom}</h3>
                <div className="contact-biography" dangerouslySetInnerHTML={{ __html: contactinfos.biographie }}></div>
                <ul className="contact-methods">
                        <li><a href={'mailto:' + contactinfos.email}>{contactinfos.email}</a></li>
                        <li><a href={'tel:' + number}>{contactinfos.telephone}</a></li>
                </ul>
        </div>
    );
};

export default ContactCard;
