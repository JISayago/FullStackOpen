import React from 'react'

function Total(props) {
const exercises1 = props.curso.parts[0].exercises;
const exercises2 = props.curso.parts[1].exercises;
const exercises3 = props.curso.parts[2].exercises;
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}
export default Total;
