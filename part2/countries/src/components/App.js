import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'

function App() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState()
    const [searchList, setSearchList] = useState([])
    
    const peticionGet = async () => {
        await axios
        .get('https://restcountries.com/v3.1/all')
        .then(response=>{
            setCountries(response.data)
        }).catch(error=>{
        })
    }
   
    const handleSearch = (e) => {
        setSearch(e.target.value)
        filtro(e.target.value)
    }
    const filtro = (searchedValue) => {
        let answer = countries.filter(c => c.name.common.toString().toLowerCase().includes(searchedValue.toLowerCase()));
        setSearchList(answer)     
    }
    useEffect(() => {
        peticionGet();
    })

    return (
      <div>
            find countries <input onChange={handleSearch} />
            <div>
                {
                    searchList.length > 10 ?
                    <h2>too many results, please continue writting</h2> :                    
                        searchList.map((x) => <Country data={x} unico={searchList.length === 1 ? true : false} />)
                    }  
            </div>
      </div>
  )
}
export default App;

