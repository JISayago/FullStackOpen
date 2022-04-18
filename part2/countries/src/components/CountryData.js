import React, { useEffect} from 'react'
import axios from 'axios'

function CountryData({ data }) {
  const languages = data.languages
  const KEY = 'bdaefdf52ba8500feb142332af8b2710'  

  const capital = "New York"
  const api_weather = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${KEY}&query=${capital}&units=m`)  
      .then(response => { 
      console.log(response.data)
    })
  }
  useEffect(() => {
    api_weather()
  })
  return (
    <div>         
    <h1>{data.name.common}</h1>
    <p>capital: {data.capital}</p>
    <p>population: { data.population}</p>
    <h2><strong>languages</strong></h2>
    <ul>
        {
            Object.getOwnPropertyNames(languages)
            .map(lang => <li key={lang}>{languages[lang]}</li>)
        }
    </ul>
            <h1>
                {data.flag}
      </h1>
      <div>
      </div>
</div>
  )
}
export default CountryData;