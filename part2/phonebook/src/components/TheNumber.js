import React from 'react'

function TheNumber({name , number , del}) {
  return (
      <p>{name} {number}<button onClick = {del}>X</button></p>
  )
}
export default TheNumber;