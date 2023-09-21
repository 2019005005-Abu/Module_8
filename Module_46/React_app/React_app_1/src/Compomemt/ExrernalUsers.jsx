import React,{useEffect, useState} from 'react'

const ExrernalUsers = () => {
    const [api,setapi]=useState([]);
     useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts`)
       .then(res=>res.json())
       .then(data=>setapi(data)) 
     },[])
     let loadingapi=api.map((sp)=>{
        return <p>{sp.title}</p>
        
     })
  return (
    <div>
      <h1 style={{textAlign:'center'}}>ExrernalUsers</h1>

      <div style={{display:'grid',gridColumn:'1fr '}}>{loadingapi}</div>  
    </div>
  )
}

export default ExrernalUsers
