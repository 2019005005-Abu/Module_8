import React from 'react'
import "../../../src/Components/Header/Header.css";
import Logo from "../../../src/assets/images/Logo.svg"
export const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt=""/>
      <a href="/shop">Shop</a>
      <a href="/order">Order</a>
      <a href="/inventory">Inventory</a>
      <a href="/login">Login</a>
    </div>
  )
}
