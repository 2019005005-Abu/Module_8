import React from 'react'
import { My } from './Component/My'
import { Props_1 } from './Component/Props_1'
const App = () => {
  let styling={
    color:"red",
    
  }
   const myName=()=>{
    console.log("Abu Al Shahriar Rifat")
   }
  return (
   <div>
     <h1 style={styling}>Abu Al Shahriar Rifat</h1>
     <My name="Abu Al Shahriar Rifat" myName={myName}></My>
     <Props_1 name="Abu Al Shahriar Rifat"></Props_1>
   </div>
   
  )
}

export default App