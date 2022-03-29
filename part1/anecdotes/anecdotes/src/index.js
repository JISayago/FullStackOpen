import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes =['If it hurts, do it more often',
'Adding manpower to a late software project makes it later!',
'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const votes = new Array(anecdotes.length)

const App = (props) => {
  const propsAnecdotes = props.anecdotes
  const arrayVote = props.votes
  const [selected, setSelected] = useState(0)
  
  const handleRandom= () =>{    
    let anecdotes = propsAnecdotes;
    let random = Math.floor(Math.random()*anecdotes.length);
    setSelected(random)
  }
  
  const handleVote = () =>{
    arrayVote[selected] === undefined ? arrayVote[selected] = 1 : arrayVote[selected]++
        
  }
  const handleMessage = () => {
    let cantidad = arrayVote[selected]
    arrayVote[selected]===undefined ? cantidad = 0 : cantidad = arrayVote[selected]
    return ". Has "+ cantidad + " votes."
  }
  return (
    <div>

    <button onClick={handleRandom}>Random Anecdote</button>
    <button onClick={handleVote}>Vote</button>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}{handleMessage()}</p>
    </div>
    )
  }
  
  
  ReactDOM.render(

    <App anecdotes={anecdotes} votes={votes}/>,
    document.getElementById('root')
    )