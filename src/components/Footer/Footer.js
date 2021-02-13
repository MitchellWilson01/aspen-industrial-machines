import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import logoWhite from '../../images/logoWhite.png';
import './Footer.scss';


const Footer = () => {
    const initialResize = window.innerWidth <= 829 ? true : false;
    
    const [resize, setResize] = useState(initialResize);

    const handleResize = () => {
        if (window.innerWidth <= 835) {
            setResize(true);
        } else {
            setResize(false);
        }
    }

    const footerLogo =  <div className="footer-logo-container">
                            <img src={logoWhite} className="footer-logo" />
                        </div>
    
    const footerButtons =   <div className="footer-button-container">
                                <Button className="footer-button footer-contact-button" variant="outline-primary">
                                    Contact
                                </Button>
                                <Button className="footer-button footer-services-button" variant="primary">
                                    Services
                                </Button>
                            </div>

    window.addEventListener("resize", handleResize);

    return (
        <>
            <div className="footer">
                <div className="footer-contact-info">
                    <div className="footer-phone-info">
                        <i className="fas fa-phone"></i>&nbsp;
                        (512) 373-6160
                    </div>
                    <div className="footer-email-info">
                        <i className="fas fa-envelope-open-text"></i>&nbsp;
                        contact@aspenindustrialmachines.com
                    </div>
                    <div className="footer-copyright">
                        <i className="far fa-copyright"></i>&nbsp;
                        2021 - Aspen Industrial Machines
                    </div>
                </div>
                {resize ? null : footerLogo}
                {resize ? null : footerButtons}
            </div>
        </>
    )
}

export default Footer;