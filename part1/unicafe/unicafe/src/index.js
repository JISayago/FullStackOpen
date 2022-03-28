import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
  <button onClick = {props.onClick}>{props.text}</button>
  )
}
const Statistics = (props) => {
  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;

  const all = (good,bad,neutral) => {
    return good + bad + neutral
  }
  
  const average = (good,bad,neutral) => {
    
    return ((good * 1) + (bad * (- 1)))/all(good,bad,neutral)
  }
  const positive = (good,bad,neutral) => {
    
    return good * 100/all(good,bad,neutral)
  }

  return all(good,neutral,bad)===0 ? 
  <p>No feedback given</p> 
  : 
  (
    <>
    <p>
    <span>good: {good}</span><br/>
    <span>neutral: {neutral}</span><br/>
    <span>bad: {bad}</span>
    </p>
    <p>
    <span>all:{all(good,neutral,bad)}</span><br/>
    <span>average: { average(good,bad,neutral)}</span><br/>
    <span>positive: {positive(good,neutral,bad)}</span>
    </p>
    </>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good +1)
  }
  
  const addNeutral = () => {
    setNeutral(neutral +1)
  }
  
  const addBad = () => {
    setBad(bad +1)
  }


  return (
    <div>
    
  
    <h1>give feedback</h1>
    <Statistic text = {"good"}
     onClick = {addGood} />
     <Statistic text = {"neutral"}
     onClick = {addNeutral} />
     <Statistic text = {"bad"}
     onClick = {addBad} />  
    <h1>statistics</h1>
   
    <Statistics bad = {bad} good = {good} neutral = {neutral}/>
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)