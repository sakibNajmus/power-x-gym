import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div id="footer" className="container">
                <div className="row pt-5">
                    <div className="col-md-3">                        
                        <a href="#" style={{fontSize: '35px', fontWeight: '500', textDecoration: 'none', color: 'white'}}>POWER <span style={{color: '#fcd842'}}>X</span></a>
                    </div>

                    <div className="col-md-2">
                        <p className="text-light">Need Help?</p>
                        <ul className="list-unstyled text-light">
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Help Center</Link></li>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Email Support</Link></li>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Live Chat</Link></li>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Gift Certificates</Link></li>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Send Us Feedback</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <p className="text-light">Digital Resources</p>
                        <ul className="list-unstyled text-light">
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Articles</Link></li>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">E-Books</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <p className="text-light">Connected with Us</p>
                        <ul className="list-unstyled text-light">
                            <div className="social list-inline">
                                <li className="list-inline-item"><a target="_blank" href="//facebook.com"><FontAwesomeIcon className="icon active-icon text-light" size = '2x' icon={faYoutube} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="//google.com"><FontAwesomeIcon className="icon text-light ml-2" size = '2x' icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="//instagram.com"><FontAwesomeIcon className="icon text-light ml-2" size = '2x' icon={faInstagram} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="//twitter.com"><FontAwesomeIcon className="icon text-light ml-2" size = '2x' icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="//whatsapp.com"><FontAwesomeIcon className="icon text-light ml-2" size = '2x' icon={faWhatsapp} /></a></li>
                            </div>
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Forum</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <p className="text-light">Join Our Newsletter</p>
                        <ul className="list-unstyled text-light">
                            <li className="mb-2" ><Link style={{textDecoration: 'none', color: 'white'}} to="/">Get exclusive news, features and updates from The Shredder Weight Loss Academy!</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-12">                                        
                    <div className="text-center mt-5 pt-5 text-light">
                        <small>© Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;