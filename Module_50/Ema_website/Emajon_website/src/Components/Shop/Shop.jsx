import React, { useEffect, useState } from 'react'
import "../../../src/Components/Shop/Shop.css";
import { Product } from '../Product/Product';
import { Cart } from '../Cart/Cart';
import {addToDb, getShoppingCart} from "../../../src/assets/utilities/fakedb"
// import dataJson from "../../../public/products.json";
export const Shop = () => {
    const [products,SetProducts]=useState([]);
    const fetchingData='../../../public/products.json';
    const [cart,setCart]=useState([]);
        useEffect(function(){
         fetch(fetchingData)
         .then((res)=>{
            return res.json();
         }).then((data)=>{
            console.log(data);
            SetProducts(data);
         })
        },[])
          
       useEffect(function(){
         const storedCart=getShoppingCart();
         console.log(storedCart);
         const saveCart=[];
         //step_1:get id
         for(let id in storedCart){
            //step 2 get the product by  using id
            console.log(id);
            const addedProduct=products.find(product=>product.id===id);
            console.log(addedProduct);
            if(addedProduct){
                 //step 3get the quality of the product
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            //step-4 add the added product to the saved cart
            saveCart.push(addedProduct);
            }
         }
         //step-5:set the cart
         setCart(saveCart);
       },[products])


        const handleAddToCart=(product)=>{
          console.log(product);
          let newCart=[...cart,product];
          //if product doesnot exist in the cart,
          //then set quality=1
          //if exist update the quantity by 1
          let exist=cart.find(pd=>pd.id===product.id);
          if(!exist){
            product.quantity=1;
            newCart=[...cart,product];
          }else{
            exist.quantity=exist.quantity+1;
            const remaing=cart.filter(pd=>pd.id !==product.id);
            setCart(...remaing,exist);
          }
          setCart(newCart);
          addToDb(product.id);

       }
     return (
    <div className='shop-containers'>
       <div className="products-container">
           <h1>Products comming are:{products.length}</h1>
            <div className='products'>
                {
                 products.map(function(product){
                return (<Product 
                product={product} 
                key={product.id} 
                handleAddToCart={handleAddToCart}/>)
                 })
                }
            </div>
       </div>
       <div className="card-container">
         <Cart cart={cart}></Cart>
       </div>
    </div>
  )
}
