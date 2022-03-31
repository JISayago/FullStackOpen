import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

 const Course = (props) =>  {
   const course = props.course
  return (
    <div>
    <Header curso = {course}/>
    <Content curso = {course}/>
    <Total curso = {course}/>  
     
    </div>
  )
}

export default Course