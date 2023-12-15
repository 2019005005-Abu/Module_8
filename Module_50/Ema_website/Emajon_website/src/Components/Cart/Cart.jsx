import React from 'react'
import "../../../src/Components/Cart/Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
export const Cart = ({cart,clearCart,children}) => {
 console.log(cart)
  let total=0;
  let totalShipping=0;
  let quantity=0;
  for(let product of cart){
    // product.quantity=product.quantity || 1;
    // if(product.quantity===0){
    //   product.quantity=1
    // }
    
    total=total+product.price*product.quantity;
    totalShipping=totalShipping+product.shipping;
    quantity=quantity+product.quantity
  }
  let tax=total*5/100;
  let GrandTotal=total+totalShipping+tax
  return (
    <div>
      <div className='Cart_Payment_Information'>
        <strong>Order Summary</strong>
        <p>You have selected:{quantity}</p>
        <strong>Total price:$ {total}</strong><br/>
        <strong>Total Shipping:{totalShipping}</strong><br/>
        <strong>Tax:{tax}</strong><br/>
        <h6>Grand Total:{GrandTotal.toFixed(2)}</h6>
    </div>
     <div className='cart__clean'>
       <button className='Clear__Cart' onClick={clearCart}>
        <p>Clear Cart</p>
        <FontAwesomeIcon icon={faTrashAlt} className='cart_icon'/>
    </button>
     {children}
       
     </div>
    </div>
   
    
  )
}
