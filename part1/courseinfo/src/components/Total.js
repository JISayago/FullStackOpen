import React from 'react'

function Total(props) {
  const partes = props.curso.parts
  let  total = partes.reduce((suma,parte)=>{
 return suma + parte.exercises
},0) 


  return (
    <div>
        <p><strong>total of {total} exercises</strong></p>
    </div>
  )
}
export default Total;
