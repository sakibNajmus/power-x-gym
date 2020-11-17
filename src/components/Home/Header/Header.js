import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import HeaderContent from './HeaderContent';

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a class="navbar-brand" href="#" style={{fontSize: '35px', fontWeight: '500'}}>POWER <span style={{color: '#fcd842'}}>X</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-3 active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" to="/pricing">Services</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" to="/classes">Our Classes</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#about">About Us</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item mr-3">
                            <Link class="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;