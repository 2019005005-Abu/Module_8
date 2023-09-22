import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shop } from './Components/Shop/Shop.jsx';
import { HomeLayOut } from './Components/HomeLayout/HomeLayOut.jsx';
import {Orders} from "../src/Components/Orders/Orders.jsx";
import {Inventery} from  "../src/Components/Inventory/Inventery.jsx";
import {LogIn} from  "../src/Components/LogIn/LogIn.jsx";
import cartProductsLoader from './Components/CustomeLoader/CustomeCartProductsLoader.js';


const router=createBrowserRouter([
  {
  path:'/',
  element:<HomeLayOut></HomeLayOut>,
   children:[
    {
      path:'/',
      element:<Shop></Shop>
    },{
      path:'/order',
      element:<Orders/>,
      loader:cartProductsLoader
    },
    {
     path:'/inventory',
     element:<Inventery></Inventery>
    },
    {
    path:'/login',
    element:<LogIn></LogIn>
    }
   ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)
