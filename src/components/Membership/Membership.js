import React from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Footer from '../Home/Footer/Footer';
import Checkout from './Checkout';

const Membership = () => {
    return (
        <div>
            <ComponentHeader/>
            <Checkout/>
            <Footer/>
        </div>
    );
};

export default Membership;