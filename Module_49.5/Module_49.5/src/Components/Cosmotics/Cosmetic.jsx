import React from 'react'
import { addToDatabase, removeFromDb } from '../../utilities/fakedb';

export const Cosmetic = (props) => {
    const{id,name,price}=props.cosmetic;
    const addToCart=(id)=>{
      addToDatabase(id);
    }
    const addTocartWithParams=()=>addToCart(id);

    const removeFromCart=id=>{
        removeFromDb(id);
    }
  return (
    <div>
       <h1>Name:{name} id:{id}</h1>
        <h2>Price:{price}</h2> 
        <button onClick={addTocartWithParams}>
            Add To Cart
        </button>
        <button onClick={()=>removeFromCart(id)}>
            Remove
        </button>
    </div>
    
  )
}
