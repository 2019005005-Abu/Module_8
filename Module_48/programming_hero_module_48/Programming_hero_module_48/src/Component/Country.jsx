import React from 'react'
import "../../"
const Country = ({country}) => {
    
  return (
    <div className="country">
      <p>Country Name:{country.name.common}</p>
      <code>Official-Name{country.name.official}</code>
     
    </div>
  )
}

export default Country
