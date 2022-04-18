import React, { useState } from 'react';
import './Cart.css'
const Cart = ({cart,products,removeCartProduct}) => {
     console.log(cart)
    // console.log(products)
    const [offer,setOffer]= useState([]);
    const offerButton=()=>{
        const randomNumber=Math.floor( Math.random()*cart.length);
        const item=cart[randomNumber];
      //   console.log(item)
      //   console.log(randomNumber)
      setOffer(item);
    }
       const product= cart.map(product=>product )
  
    return (
        <div>
            <h1>Select Favourite food</h1>
             {
                 cart.map(product=><div className='cart-product'>
                     <img width={50} height={50} src={product.img} alt="" />
                    <h1>{product.name}</h1>
                    

                 </div>)
             }
           
           <button className='remove-btn' onClick={()=>removeCartProduct(product.id)}>Remove Select Product</button>

           <button onClick={offerButton} className='remove-btn'>Choose one From cart</button>
           {
             Object.keys(offer).length>0 &&<div className='offer'>
                 <img width={50} height={50} src={offer.img} alt="" />
                <h1>{offer.name}</h1>
                </div>
          } 
        </div>
    );
};

export default Cart;