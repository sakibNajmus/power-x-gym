import React from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Footer from '../Home/Footer/Footer';
import './Pricing.css';
import PricingCart from './PricingCart';

const Pricing = () => {
    return (
      <div className="">
        <ComponentHeader/>
             <div className="container mt-3 mb-5">
              <div className=" text-center">
              <h2><span className="text-warning">CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br/> laudantium, totam rem aperiam</p>
              </div>
              <div className="">
                  <PricingCart/>
              </div>           
          </div>
          <Footer/>
      </div>
       
    );
};

export default Pricing;