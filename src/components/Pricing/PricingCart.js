import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const PricingCart = () => {
    // const handlePricing = () => {

    // }
    return (
        <section className="">
            <div className="container">
                <div className="row text-center text-white mt-4">
                    <div className="col-md-4 mb-3">
                        <div className="advance-plan mt-5">
                            <h6 className="text-uppercase text-warning">build monthly</h6> 
                            <h3 className="text-uppercase">advance plan</h3>
                            <h1 className="text-warning">$140</h1>                            
                            <ul className="list-unstyled mt-3">
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Best Hosting</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Free Custom</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Outstanding</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Happy Customers</li>
                            </ul>
                            <Link to="/membership"><button className="btn btn-warning text-uppercase mt-4">Purchase</button></Link>
                        </div>                       
                    </div>
                    <div className="col-md-4 ">
                        <div className="basic-plan mt-5">
                            <h6 className="text-uppercase text-warning">build monthly</h6> 
                            <h3 className="text-uppercase">basic plan</h3>
                            <h1 className="text-warning">$120</h1>                         
                            <ul className="list-unstyled mt-3">
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Best Hosting</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Free Custom</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Outstanding</li>
                                <li className="mt-2"><FontAwesomeIcon icon={faCheck} /> Happy Customers</li>
                            </ul>
                            <Link to="/membership"><button className="btn btn-warning text-uppercase mt-4">Purchase</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="beginers-plan mt-5">
                            <h6 className="text-uppercase text-warning">build monthly</h6> 
                            <h3 className="text-uppercase">beginers plan</h3>
                            <h1 className="text-warning">$90</h1>                           
                            <ul className="list-unstyled mt-3">
                                <li className="mt-2"> <FontAwesomeIcon icon={faCheck} /> Mobile-Optimized</li>
                                <li className="mt-2"> <FontAwesomeIcon icon={faCheck} /> Best Hosting</li>
                                <li className="mt-2"> <FontAwesomeIcon icon={faCheck} /> Free Custom</li>
                                <li className="mt-2"> <FontAwesomeIcon icon={faCheck} /> Outstanding</li>
                                <li className="mt-2"> <FontAwesomeIcon icon={faCheck} /> Happy Customers</li>
                            </ul>
                           <Link to="/membership"><button className="btn btn-warning text-uppercase mt-4">Purchase</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCart;