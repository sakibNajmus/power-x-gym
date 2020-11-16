import React from 'react';
import './WhyChooseUs.css'
import fitness from '../../../resources/images/freefitness.png'
import cycling from '../../../resources/images/cycling.png'
import membership from '../../../resources/images/membership.png'

const WhyChooseUs = () => {
    return (
        <section id="why-choose" className="my-5 pt-5">
        <h1 style={{textTransform: 'uppercase', fontWeight: '700'}} className="mb-5 text-center"><span style={{color: '#fcd842'}}>Why</span> Choose Us</h1>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <div className="fitness">
                            <img className="img-fluid w-25" src={fitness} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase', fontSize: '16px', fontWeight: '700'}}>Free Fitness Training</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facere praesentium, nisi distinctio totam dolor?</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="cycling">
                            <img className="img-fluid w-25" src={cycling} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase', fontSize: '16px', fontWeight: '700'}}>Tons of Cardio and Strength</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facere praesentium, nisi distinctio totam dolor?</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="membership">
                            <img className="img-fluid w-25" src={membership} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase', fontSize: '16px', fontWeight: '700'}}>No Commitment Memberships</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facere praesentium, nisi distinctio totam dolor?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;