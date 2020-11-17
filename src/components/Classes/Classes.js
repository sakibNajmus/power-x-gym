import React from 'react';
import fakeData from '../FakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Footer from '../Home/Footer/Footer';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
const Classes = () => {
    const [products,setProducts]=useState(fakeData);
    return (
       <>
        <ComponentHeader></ComponentHeader>
        <div class="w-90">
            
            <div class="mt-5 m-3 mb-5 d-flex justify-content-around flex-wrap" >              
                {
                    products.map(pd=><Product product={pd} key={pd._id} ></Product>)
                }
            </div>
        </div>            
        <Footer></Footer>      
    </>
    );
};

export default Classes;