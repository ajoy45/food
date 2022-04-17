import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);

    // console.log(list)
    
    useEffect(()=>{
        fetch('food.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const handelToCart=(selectProduct)=>{
        let newCart=[];
        newCart=[...cart,selectProduct];
        setCart(newCart);
    };
    const removeCartProduct=(selectProduct)=>{
        const newList=[];
        setCart(newList);
    };
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handelToCart={handelToCart}
                    ></Product>)
                }
            </div>
            <div className="order">
                   <Cart
                   cart={cart}
                   products={products}
                   removeCartProduct={removeCartProduct}
                   ></Cart>
            </div>
        </div>
    );
};

export default Shop;