import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderContent from '../Header/HeaderContent';
import KeyFocus from '../KeyFocus/KeyFocus';
import Training from '../Training/Training';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>            
            <HeaderContent></HeaderContent>
            <KeyFocus></KeyFocus>
            <AboutUs></AboutUs>
            <Training></Training>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;