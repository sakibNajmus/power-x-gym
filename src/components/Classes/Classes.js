import React, { useEffect } from 'react';
import fakeData from '../FakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Footer from '../Home/Footer/Footer';
import ComponentHeader from '../ComponentHeader/ComponentHeader';

const Classes = () => {
    // const [products,setProducts]=useState(fakeData);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://mysterious-plateau-98854.herokuapp.com/addProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
       <>
        <ComponentHeader></ComponentHeader>
        <h1 className="title text-center pt-5" style={{color: '#fcd842'}}>Our Classes</h1>
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