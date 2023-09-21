import React,{useState} from 'react'

const Counter = () => {
    const [Counter,setCounter]=useState(0);
    const Increment=()=>{
        setCounter(()=>Counter+1);
    }
    const Decrement=()=>{
        setCounter(()=>Counter-1);
    }
  return (
    <div>
       <h1>Counter:{Counter}</h1>
        <button onClick={Increment} disabled={Counter===100}>Increment</button>
        <button onClick={Decrement} disabled={Counter===0}>Decrement</button>
    </div>
  )
}

export default Counter
