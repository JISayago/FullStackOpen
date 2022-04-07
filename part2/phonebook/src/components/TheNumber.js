import React from 'react'

function TheNumber(props) {
  const { name, number } = props
  return (
      <p>{name} { number}</p>
  )
}
export default TheNumber;