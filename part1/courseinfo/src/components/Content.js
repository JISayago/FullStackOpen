import React from 'react'
import Parte from './Parte';

function Content({curso}) {

const partes = curso.parts

  return (
     
      <div>
      {partes.map((parte)=>{
        return <Parte key = {parte.id} parte = {parte.name} exercises = {parte.exercises}/> 
      })} 
     </div>
  )
}

export default Content;
