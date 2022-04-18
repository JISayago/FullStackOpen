import React, {useState} from 'react'
import CountryData from './CountryData'

function Country(props) {
    const { data, unico } = props
    const [show,setShow] = useState(false)
    const handleClick = () =>
    {
        setShow(!show)
       return  console.log(show)
    }
    return (
        unico ? 
            <CountryData data={ data } />
            :
            <div>            
                <h5>{data.name.common}<button onClick={handleClick}>show</button></h5>
                {show ?
                    <CountryData data={data} /> :
                    <></>
                }
            </div>
    )
}
export default Country
