import React from "react"
import Com_2 from "./Compomemt/Com_2"
import Counter from "./Compomemt/Counter"
import ExrernalUsers from "./Compomemt/ExrernalUsers"
function App() {
  let st1={color:'black',backgroundColor:'green',margin:'0 auto',padding:'10px',
  width:'350px',textAlign:'center'}
  let st2={color:'red',textAlign:'center'}
  let st3={color:'red',textAlign:'center',fontWeight:'bolder'}
  let Bio={
    name:'Abu Al Shahriar Rifat',
    age:25
  }
  let actor=['Bapparaj','Razib','Sakib Khan','Jasim']
  const singers=[
    {name:'Dr Mahfuz',job:'Singer_1'},
    {name:'Eva Rahman',job:'Singer_2'}
  ]
  return (
    <div>
     <Com_2 
     name="Abu Al Shahriar Rifat" 
     age='23'
     style1={st1} 
     style2={st2}
     actor={actor}
     singers={singers}
     />
     <div style={st2}><Counter></Counter></div>
     <div><ExrernalUsers></ExrernalUsers></div>
    </div>
    
    
    
  )
}

export default App
