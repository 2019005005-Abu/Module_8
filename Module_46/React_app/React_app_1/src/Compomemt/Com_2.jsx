import React from 'react'
import Com_1 from './Com_1'
import Com_3 from './Com_3'
const Com_2 = ({name,age, style2,style1,actor,singers}) => {
  
  const stt={color:'red',border:'1px solid blue',fontWeight:'bolder',width:'300px',
  padding:'10px 20px',margin:'0 auto',marginBottom:'10px'}
  return (
    <div>
      <h1 style={style2}>My name is {name}</h1>
      <h1 style={style1}>Age:{age}</h1>
       <p>
       {
        actor.map((ac)=>{
          return <Com_1 ac={ac}></Com_1>
        })
       }
       </p>
      <p>
      {singers.map(function(si){
        return <Com_3 si={si} stt={stt}></Com_3>
      })}</p>
      
    </div>
  )
}

export default Com_2
