import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
     const {img,name,price}=props.product;
    //  console.log(img);
    return (
        <div className='products'>
            <div className="product-details">
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <p>Price:${price}</p>
                <div className='btn-position'>
                   <button onClick={()=>props.handelToCart(props.product)} className="product-btn" >
                       <p>Add To Cart</p>
                       <FontAwesomeIcon icon={ faShoppingCart}></FontAwesomeIcon>
                       </button>
                   
                </div>
               
            </div>
           
               
            
        </div>
    );
};

export default Product;