import React from 'react';
import './Training.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import yoga from '../../../resources/images/yoga.png'
import cardio from '../../../resources/images/cardio.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Training = () => {
    return (
        <section id="training" className="my-5 pt-5">
            <h1 style={{textTransform: 'uppercase', fontWeight: '700'}} className="mb-5 text-center">Training <span style={{color: '#fcd842'}}>Programs</span> </h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="yoga">
                            <img className="img-fluid" src={yoga} alt=""/>
                        </div>
                        <div className="yoga-button">
                            <button style={{textTransform: 'uppercase'}}>Yoga Training Session <span className="ml-5"><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                        <div className="yoga">
                            <img className="img-fluid" src={cardio} alt=""/>
                        </div>
                        <div className="yoga-button">
                            <button style={{textTransform: 'uppercase'}}>Cardio Training Session <span className="ml-5"><FontAwesomeIcon icon={faArrowRight} /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;