import React from 'react';
import fakeData from '../FakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Header from '../Home/Header/Header';
import HeaderContent from '../Home/Header/HeaderContent';
import Footer from '../Home/Footer/Footer';
import ClassHeader from '../ClassHeader/ClassHeader';
const Classes = () => {
    const [products,setProducts]=useState(fakeData);
    return (
       <>
        <Header></Header>
        <div class="w-90 ">
            {/* <ClassHeader></ClassHeader> */}
            <div class="m-3 mb-5 d-flex justify-content-around flex-wrap" >
              
                    {
                        products.map(pd=><Product product={pd} key={pd._id} ></Product>)
                    }
                    </div>
              <Footer></Footer>
            </div>
            
            
        
    </>
    );
};

export default Classes;