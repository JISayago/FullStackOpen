import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'

function App() {
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        console.log('efect')
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
            console.log('promise fullfilled')
            setCountries(response.data)
            })
    }, [])
 console.log('render', countries.length,'countries')
    
    return (
      <div>
            {countries.map(c =>
                <Country key={c.name.common} data={c} />
            )}
      </div>
  )
}
export default App;