import React, { useEffect, useState } from 'react'
import { sum } from './Count'
import { Cosmetic } from './Cosmetic'

export const Cosmotics = () => {
 
    const cosmetics=[
        {id:1,name:'alta',price:24000},
        {id:2,name:'alta',price:56000},
        {id:3,name:'alta2',price:78757}
    ]
  return (
    <div>
        <h1>Welcome to My Cosmetics</h1>
        <h1>Total:{sum(10,30)}</h1>
        {
        cosmetics.map(function(cosmetic){
            return (<Cosmetic 
            key={cosmetic.id} cosmetic={cosmetic}>

            </Cosmetic>)
        })
        }

   
    </div>
  )
}
