import { getShoppingCart } from "../../assets/utilities/fakedb";


const cartProductsLoader=async()=>{
  //if can data is in the db ,you have to use async await
 const storedCart=getShoppingCart();
 const id_s=Object.keys(storedCart);
 console.log(id_s)
 
 const loadedProducts=await fetch(`http://localhost:5000/productsById`,{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(id_s)
 });
 const products=await loadedProducts.json();
 console.log('products by Id',products)
 const saved__Cart=[];
 console.log(storedCart);
 for(const id in storedCart){
  const addedproduct=products.find(pd=>pd._id===id);
  if(addedproduct){
    const quantity=storedCart[id];
    addedproduct.quantity=quantity;
    saved__Cart.push(addedproduct);
  }
 }
 return products

}
export default cartProductsLoader;
