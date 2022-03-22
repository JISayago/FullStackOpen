import React from 'react'
import Parte from './Parte';

function Content(props) {
  return (      
      <>       
        <Parte parte = {props.part1} excersise = {props.exercises1} />
        <Parte parte = {props.part2} excersise = {props.excersises2} />
        <Parte parte = {props.part3} excersise = {props.excersises3} />
     </>
  )
}

export default Content;
