import React from 'react'

function Country(props) {
    const { data } = props
    return (
        <h2>{ data.name.common}</h2>
)
}
export default Country
