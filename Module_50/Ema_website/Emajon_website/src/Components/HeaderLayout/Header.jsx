import React from 'react'
import "./Header.css";
import Logo from "../../../src/assets/images/Logo.svg";
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt=""/>
      <Link to="/">Shop</Link>
      <Link to="/order">Order</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}
