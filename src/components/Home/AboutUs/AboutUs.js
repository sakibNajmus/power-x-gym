import React from 'react';
import about from '../../../resources/images/about-us.jpg'

const AboutUs = () => {
    return (
        <section id="about" className="my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid w-100 mb-3" src={about} alt=""/>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <h1 style={{textTransform: 'uppercase', color: '#e7e7e7', fontWeight: '700'}}>About Us</h1>
                        <h3 style={{textTransform: 'uppercase', color: '#fcd842'}}>We are Here to Dream!</h3>
                        <h3 style={{textTransform: 'uppercase', fontSize: '27px'}}>Our Team is Here to Serve You!</h3>
                        <p style={{textAlign: 'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quaerat officia autem ipsam illum odit nobis deleniti rerum! Dolorem esse at nulla tenetur optio exercitationem eveniet quibusdam nesciunt. Ratione cumque aspernatur omnis hic nihil quisquam adipisci excepturi voluptates natus illo nobis itaque, fugiat quasi eveniet rerum ut beatae dolorem sed?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;