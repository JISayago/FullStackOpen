import React, { useState } from 'react'
import TheNumber from './TheNumber'

const App = function () {
	const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '001-222-1123'
        },
        {
            name: 'Parto Tellas',
            number: '002-232-1123'
        }
    ])
    const [newName, setNewName] = useState("")
    
    const [newNumber, setNewNumber] = useState("")

     
    const addPerson = (e) => {
        e.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(newPerson))
        setNewName(" ")
        setNewNumber(" ")
    }
    
    const handleName = (e) => {
        setNewName(e.target.value)
    }   
    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Search by name: <input/>
            </div>
            
            <h2>Add New</h2>
        <form onSubmit={addPerson}>
            <div>
                name: <input onChange={handleName}/>
            </div>
            <div>
                number: <input onChange={handleNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
            
            <h2>Numbers</h2> 
            {persons.map(p =>
                <TheNumber name={p.name} number={p.number} />
            )}

        </div>
    )
}        
        export default App