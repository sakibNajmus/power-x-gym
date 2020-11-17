import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
    return (
        <section className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 mt-5 pt-5 col-12">
                    <h2 style={{textTransform: 'uppercase', fontSize: '60px', color: 'white'}}>The Best Fitness<br/>Studio in Town</h2>
                    <p className="my-5" style={{color: 'white', textAlign: 'Justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusamus voluptatem odit, assumenda debitis consectetur beatae nobis in repellat dolor error at excepturi, velit expedita, iusto vitae. Ipsa?</p>
                    <Link to="/pricing"><button className="btn btn-main">Join Us</button></Link>
                </div>

                <div className="col-md-6 col-12 mt-5 pt-5">
                    <iframe style={{borderRadius: '10px'}} width="100%" height="315" src="https://www.youtube.com/embed/K1hA6A8O-Fo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;