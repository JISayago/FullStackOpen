import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
  const all = (good,bad,neutral) => {
    return good + bad + neutral
  }
  
  const average = (good,bad,neutral) => {
    
    return ((good * 1) + (bad * (- 1)))/all(good,bad,neutral)
  }
  const positive = (good,bad,neutral) => {
    
    return good * 100/all(good,bad,neutral)
  }

  return (
    <div>
    <h1>give feedback</h1>
    <button onClick={addGood}>good</button>
    <button onClick={addNeutral}>neutral</button>
    <button onClick={addBad}>bad</button>
    <h1>statistics</h1>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>all:{all(good,neutral,bad)}</p>
    <p>average: {all(good,neutral,bad)=== 0 ? 0 : average(good,bad,neutral)}</p>
    <p>positive: {all(good,neutral,bad)=== 0 ? 0 : positive(good,neutral,bad)}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)