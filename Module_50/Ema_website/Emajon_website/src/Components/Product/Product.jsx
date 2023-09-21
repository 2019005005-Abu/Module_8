import React from 'react'
import "../../../src/Components/Product/Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
export const Product = (props) => {
   const handleAddToCart=props.handleAddToCart;
   const {price}=props.product
  return (
    <div className='product'>
        <div className="product-info">
        <img src={props.product.img} 
        className='imgstyle'/>
        <p className='product-name'>
            {props.product.name}
        </p>
        <p className='product-price'>
            Price:${price}
            </p>
        <p className='product-ratings'>
            Rating:{props.product.ratings}
        </p>
        <p className='product-ratings'>
            Manufacture:{props.product.seller}</p>
        </div>
        <div className='buttonStyle'>
          <button 
          className='btn-cart'
          onClick={()=>handleAddToCart(props.product)}>
            Add to cart
        </button>
        <p>
            <FontAwesomeIcon icon={faCartArrowDown}/>
        </p>
        </div>
      
    </div>
  )
}

