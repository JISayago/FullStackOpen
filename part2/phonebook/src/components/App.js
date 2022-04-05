import React, { useState } from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
    
    const handleName = (event) =>{
        setNewName(event.target.value)
    }
    
    const addNewName = (event) => {
        event.preventDefault()
        const person = {
            name: newName
        }
        
        persons.some((p) => {
            if (p.name === person.name) {
                alert(`${p.name} is already added to phonebook`)
                return true    
            }
            else {
                setPersons(persons.concat(person))
                setNewName('')
                return false
            }
        });
        
        
    }
    
    return (
        <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNewName}>
        <div>
        name: <input onChange={handleName}/>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
        </form>
        <h2>Numbers</h2>   
        {persons.map((p) => {
            return <p key={p.name}>{p.name}</p>
        })
    }
    </div>
    )
}

export default App