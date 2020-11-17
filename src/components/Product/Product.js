import React from 'react';
import fakeData from '../FakeData';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Home/Footer/Footer';

const Product = (props) => {
     const {img,name,id}=props.product;
    
    return (
        <div class="col-md-2 mb-3 text-white">
            <img src={img}  class="card-img-top" />
           
            <div class="card-img-overlay ">
                <Link to={"/classDetails/"+id}> <button class="btn btn-warning text-center" >{name} <FontAwesomeIcon icon={faArrowRight} /> </button> </Link> 
            </div>
        </div>        
    );
};

export default Product;