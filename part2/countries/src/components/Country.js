import React from 'react'

function Country(props) {
    const { data, unico } = props
    const languages = data.languages
 
    return (
        unico ? 
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
            </div>
            :
            <h1>{data.name.common}</h1>
    )
}
export default Country
