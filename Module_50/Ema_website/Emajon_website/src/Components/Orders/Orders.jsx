import React, { useState } from 'react'
import {Cart} from "../Cart/Cart.jsx";
import "../../Components/Shop/Shop.css"
import { useLoaderData } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem.jsx';
import { removeFromDb } from '../../assets/utilities/fakedb.js';

export const Orders = () => {
  const SaveCart=useLoaderData();
  const[cart,SetCart]=useState(SaveCart);
  const HandleRemoveFrom_Cart=(id)=>{
    console.log(id);
    const remaing=cart.filter(product=>product.id !==id);
    SetCart(remaing);
    removeFromDb(id)
  }
  return (
    <div className='shop-containers'>
       <div className='reviewContainer'>
          <h2>Order :{SaveCart.length}</h2>
          <div>
             {
              cart.map(function(product){
              return <ReviewItem product={product} 
              key={product.id}
              HandleRemoveFrom_Cart={HandleRemoveFrom_Cart}
              />
              })
             }
          </div>
       </div>
       <div className='card-container'>
         <Cart cart={cart}/>
       </div>
    </div>
  )
}
