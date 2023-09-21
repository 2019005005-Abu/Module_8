const LoadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
        ShwonAllCountries(data);
    })
}

function ShwonAllCountries(countries){
  console.log(countries)
  const allCountries=countries.map(country=>getCountryHTML(country))
  const container=document.getElementById('allCountries');
  container.innerHTML=allCountries.join(' ');
}

const getCountryHTML=country=>{
 return `
  <div class="SingleCountries">
   <h2>${country.name.common}</h2>
   <img src="${country.flags.png}"/>
   <div class="bt">
   <button class="btn">Details</button>
   </div>
  </div>

 `
}
