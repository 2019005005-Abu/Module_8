import React from 'react'
import Country from './Country';
import "../../src/Component/Countries.css"
const Countries = () => {
    const fetchingURL=`https://restcountries.com/v3.1/all`
    const [country,setCountry]=React.useState([]);
    const [error,SetError]=React.useState(false);
    React.useEffect(()=>{
     fetch(fetchingURL)
     .then((res)=>{
        return res.json()
     }).then((data)=>{
        setCountry(data);
        console.log(data);
        
     }).catch(()=>{
        SetError(new Error("Unable to fetch data"));
        SetError(true)
     })
    },[])
  return (
    <div>
      <h1>Visiting Every country of the world</h1>
       <p>Countries Length:{country.length}</p>
        <p>{error && <p>Here is a Error,Please Check</p>}</p>
        <div className='allCountries'>
            {
                country.map(function(country){
                    return <Country country={country} key={country.id}></Country>
                })
            }
        </div>
    </div>
  )
}

export default Countries
