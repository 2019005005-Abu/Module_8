import React from 'react'
import "../ReviewItem/ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
export const ReviewItem = ({product,HandleRemoveFrom_Cart}) => {
    const {id,img,price,name,quantity}=product
  return (
    <div className='Review__item'>
        <div className="review_image_des">
        <div className='Review_image'>
            <img src={img} alt='' className='Revi_img'/>
        </div>
        <div className='Review_description'>
            <p>{name}</p>
            <p>Price:${price}</p>
            <p>Quantity:{quantity}</p>
        </div>
        </div>
        <div className='review__remove_Icon' 
        onClick={()=>HandleRemoveFrom_Cart(id)}>
            <FontAwesomeIcon icon={faTrashAlt}/>
        </div>
    </div>
  )
}
