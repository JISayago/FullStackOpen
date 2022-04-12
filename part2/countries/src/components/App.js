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
            console.log('promise fullfilled')
            setCountries(response.data)
        }).catch(error=>{
          console.log(error);
        })
      }
    console.log('render', countries.length, 'countries')
   
    const handleSearch = (e) => {
        setSearch(e.target.value)
        filtro(e.target.value)
    }
    const filtro = (searchedValue) => {
        let answer = countries.filter((c) => {
            if (c.name.common.toString().toLowerCase().includes(searchedValue.toLowerCase())) {
                return c;
            }
            return c
        });
        setSearchList(answer)
     
        console.log(searchList)
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
                        searchList.map((x) => <Country data={x}/>)
                }  
            </div>
      </div>
  )
}
export default App;

