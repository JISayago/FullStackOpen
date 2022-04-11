import React from 'react'

function Country(props) {
    const { data } = props
    return (
        <h1>{ data.name.common}</h1>
)
}
export default Country
