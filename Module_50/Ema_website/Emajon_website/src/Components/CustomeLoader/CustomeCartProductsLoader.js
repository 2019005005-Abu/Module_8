import { getShoppingCart } from "../../assets/utilities/fakedb";
const productsPath='../../../public/products.json';

const cartProductsLoader=async()=>{
 const loadedProducts=await fetch(productsPath);
 const products=await loadedProducts.json();
 //if can data is in the db ,you have to use async await
 const storedCart=getShoppingCart();
 const saved__Cart=[];
 console.log(storedCart);
 for(const id in storedCart){
  const addedproduct=products.find(pd=>pd.id===id);
  if(addedproduct){
    const quantity=storedCart[id];
    addedproduct.quantity=quantity;
    saved__Cart.push(addedproduct);
  }
 }
 return products

}
export default cartProductsLoader;
