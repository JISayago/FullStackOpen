import React from 'react'
import Parte from './Parte';

function Content(props) {

const part1 = props.curso.parts[0].name;
const part2 = props.curso.parts[1].name;
const part3 = props.curso.parts[2].name;
const exercises1 = props.curso.parts[0].exercises;
const exercises2 = props.curso.parts[1].exercises;
const exercises3 = props.curso.parts[2].exercises;

  return (
     
      <>              
        <Parte parte = {part1} exercises = {exercises1} />
        <Parte parte = {part2} exercises = {exercises2} />
        <Parte parte = {part3} exercises = {exercises3} />
     </>
  )
}

export default Content;
