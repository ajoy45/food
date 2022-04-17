import React from 'react';
import './Cart.css'
const Cart = ({cart,products,removeCartProduct}) => {
    // console.log(cart)
    // console.log(products)
       
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
        </div>
    );
};

export default Cart;