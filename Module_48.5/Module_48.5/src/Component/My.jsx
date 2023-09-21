import React, { useState } from 'react'
import { Props } from './Props';
export const My = (props) => {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count=>count+1);
    };

    const decrement=()=>{
        setCount(count=>count-1);
    }
  return (
    <div>
        <h1>My name is {props.name}</h1>
        <h1>{props.add}</h1>
         <h1>Count:{count}</h1>
         <h1>I am {props.myName()}</h1>
         <Props add={increment} sub={decrement}></Props>

        </div>

  )
}
