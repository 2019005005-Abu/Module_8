import React, { useEffect, useState } from 'react'
import "../../../src/Components/Shop/Shop.css";
import { Product } from '../Product/Product';
import { Cart } from '../Cart/Cart';
import {Link, useLoaderData} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

import {addToDb, deleteShoppingCart, getShoppingCart} from "../../../src/assets/utilities/fakedb"
// import dataJson from "../../../public/http://localhost:5000/products";
export const Shop = () => {

    const [products,SetProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [CurrentPage,setCurrentPage]=useState(0);
    const [ItemsPerPage,SetItemsPerPage]=useState(10);
    const fetchingData=`http://localhost:5000/products?page=${CurrentPage}&limit=${ItemsPerPage}`;


    const {totalProducts}=useLoaderData();
    
    const TotalPages=Math.ceil(totalProducts/ItemsPerPage);
    const pageNumbers=[...Array(TotalPages).keys()]
    console.log("Using spread ",pageNumbers);
    console.log("Total Products",totalProducts);

       
    useEffect(function(){
       async function fetchData(){
        const response=await fetch(fetchingData)
        const data=await response.json()
        SetProducts(data)
       }
       fetchData()
    },[CurrentPage,ItemsPerPage])
          
        
        
          
       useEffect(function(){
         const storedCart=getShoppingCart();
         console.log(storedCart);
         const id_s=Object.keys(storedCart);
         fetch(`http://localhost:5000/productsById`,{
         method:'POST',
         headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(id_s)
    })
    .then(res=>{
      return res.json()
    }).then(cart_products=>{
      const saveCart=[];
         //step_1:get id
         for(let id in storedCart){
            //step 2 get the product by  using id
            console.log(id);
            const addedProduct=cart_products.find(product=>product._id===id);
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
    })
        
       },[])


        const handleAddToCart=(product)=>{
          console.log(product);
          let newCart=[...cart,product];
          //if product doesnot exist in the cart,
          //then set quality=1
          //if exist update the quantity by 1
          let exist=cart.find(pd=>pd._id===product._id);
          if(!exist){
            product.quantity=1;
            newCart=[...cart,product];
          }else{
            exist.quantity=exist.quantity+1;
            const remaing=cart.filter(pd=>pd._id !==product._id);
            setCart(...remaing,exist);
          }
          setCart(newCart);
          addToDb(product._id);

       }
       const HandleClearcart=()=>{
        setCart([]);
        deleteShoppingCart();
       }
       const options=[5,10,20];
       const HandlePageChange=event=>{
        SetItemsPerPage( parseInt(event.target.value));
        setCurrentPage(1);
       }
     return (
      <>
       <div className='shop-containers'>
       <div className="products-container">
           <h1>Products comming are:{products.length}</h1>

            <div className='products'>
                {
                 products.map(function(product){
                return (<Product 
                product={product} 
                key={product._id} 
                handleAddToCart={handleAddToCart}/>)
                 })
                }
            </div>
       </div>
       <div className="card-container">
         <Cart cart={cart} 
         HandleClearcart={HandleClearcart}>
           <Link to="/order" className='LinkStyle_button'>
             <button className='review_order'>
               <p>Review Order</p>
               <FontAwesomeIcon icon={faArrowAltCircleRight}/>
             </button>
           </Link>
         </Cart>
       </div>
    </div>
    {/* Pagination starts from Here */}
    <div>
    <p style={{textAlign:'center', fontSize:'12px'}}>
        Current Page:{CurrentPage}
        </p>
        <p style={{textAlign:'center', fontSize:'12px'}}>Item Per Page :{ItemsPerPage}</p>
    </div>
          
      
     <div className='pagination' style={{display:'flex', alignItems:'center',
        justifyContent:'center', flexDirection:'row',gap:'10px',padding:'10px',
       
        }}>
          
       {
         pageNumbers.map(function(page){
          return <button key={page}
          onClick={()=>setCurrentPage(page)}
          style={{cursor:'pointer',
          padding:'10px',
          backgroundColor:'black',
          border:'none',borderRadius:'5px',
          fontWeight:'bold',
          color:'red'}}
          className={CurrentPage===page ?'s':''}>{page}</button>
         })
       }
        {/* Select starts from here */}
    <select value={ItemsPerPage} 
    onChange={HandlePageChange} 
   
     >
     {
      options.map(function(option){
        return(
          <option key={option} value={option}>
            <div >{option}</div>
             
          </option>
        )
        
      })
     }
    </select>
    {/* select ends from here */}
     </div>
    {/* Pagination Ends from Here */}
   
      </>
   
  )
}
