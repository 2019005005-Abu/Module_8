import React, { useState } from 'react'
import {Cart} from "../Cart/Cart.jsx";
import "../../Components/Shop/Shop.css"
import { useLoaderData } from 'react-router-dom';
import { ReviewItem } from '../ReviewItem/ReviewItem.jsx';
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb.js';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

export const Orders = () => {
  const SaveCart=useLoaderData();
  const[cart,SetCart]=useState(SaveCart);
  const HandleRemoveFrom_Cart=(id)=>{
    console.log(id);
    const remaing=cart.filter(product=>product._id !==id);
    SetCart(remaing);
    removeFromDb(id)
  }

  const handleClearCart=()=>{
    SetCart([]);
    deleteShoppingCart()
  }
  return (
    <div className='shop-containers'>
       <div className='reviewContainer'>
          <h2>Order :{SaveCart.length}</h2>
          <div>
             {
              cart.map(function(product){
              return <ReviewItem product={product} 
              key={product._id}
              HandleRemoveFrom_Cart={HandleRemoveFrom_Cart}
              />
              })
             }
          </div>
       </div>
       <div className='card-container'>
         <Cart cart={cart} clearCart={handleClearCart}>
            <Link to='/checkout' className='LinkStyle_button'>
             <button className='button_proced'>
              <p>Proced to CheckOut</p>
               <FontAwesomeIcon icon={faCartShopping}/>
              </button>
            </Link>
         </Cart>
       </div>
    </div>
  )
}
