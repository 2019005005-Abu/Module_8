//use localStorage to manage cart data
const addToDatabase=id=>{
    let shoppingCart={};
    //get the shopping cart
    const storedCart=localStorage.getItem('shoppind-cart');
    if(storedCart){
   shoppingCart=JSON.parse(storedCart);
    }else{
     shoppingCart={
   
     }
    }
    //add quantity
    const quantity=shoppingCart.id
    if(quantity){
        const newquantity=quantity+1;
        shoppingCart.id=newquantity
    }else{
      shoppingCart.id=1;
    }
    localStorage.setItem('shoppind-cart',
    JSON.stringify(shoppingCart));
}

const removeFromDb=id=>{
  const storedCart=localStorage.getItem('shoppind-cart');
  if(storedCart){
    const shoppingCart=JSON.parse(storedCart);
    if(id in shoppingCart){
       delete shoppingCart.id;
       localStorage.setItem('shoppind-cart',
       JSON.stringify(shoppingCart));
    }
  }
}


export  {addToDatabase,removeFromDb}
