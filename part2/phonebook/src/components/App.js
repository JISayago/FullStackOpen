import React, { useState, useEffect } from 'react'
import TheNumber from './TheNumber'
import personService from '../services/persons.js'

const App = function () {
    const [persons, setPersons] = useState([])

    const traerTodo = () => {
        personService
          .getAll()
          .then(response => {
          setPersons(response)
          })
    }
    
    useEffect(() => {
        traerTodo()
      }, [])
    
    const [searchList, setSearchList] = useState([])
    const [newName, setNewName] = useState("")    
    const [newNumber, setNewNumber] = useState("")
    const [search,setSearch] = useState("")
    
    const alreadyExist = (newPerson) => {
        const personEdit = persons.find(p => p.name === newPerson.name) 
        const exist = personEdit === undefined ? -1 : personEdit.id
        return exist
    }

    const update = (id, newPerson) => {
        const person = persons.find(p => p.id === id)
        const changedPerson = { ...person, number: newPerson.number }
        personService.update(id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(p => p.id !== id ?
                    p :
                    returnedPerson))
                    
            })
            .catch(error => {
                alert(`${changedPerson.name}, can´t be found`)
                setPersons(persons.filter(p=> p!== id))
        })

    }
    const addPerson = (newPerson) => {
        personService
        .create(newPerson)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            
           })
    }
    const addOrUpdatePerson = (e) => {
        e.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        const id = alreadyExist(newPerson)

        id !== -1 ?
        ask(newPerson,id) :
        addPerson(newPerson)
        
        setNewName(" ")
        setNewNumber(" ")
        
    }


    const ask = (newPerson,id) => {
                (window.confirm(`you are going to update de numbew of ${newPerson.name}. Are you sure?`)) ?
                update(id, newPerson) :
                alert(`${newPerson.name}, wasn't updated`)
    }
    
    const handleName = (e) => {
        setNewName(e.target.value)
    }   
    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }
    const handleSearch = (e) => {
        setSearch(e.target.value)
        filtro(e.target.value)
    }
    const filtro = (searchedValue) => {
        let answer = persons.filter(c => c.name
            .toString()
            .toLowerCase()
            .includes(searchedValue.toLowerCase()));
        setSearchList(answer)     
    }
    const handleDelete = (id) => {        
        window.confirm(`You are going to delete id ${id}. Are you sure?`) ?
            personService.del(id) : alert("nothing were deleted")
        
        setPersons(persons.filter(p => p.id !== id))
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Search by name: <input onChange={handleSearch}/>
            </div>
            
            <h2>Add New</h2>
            <form onSubmit={addOrUpdatePerson}>
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
            {
                search === ""
                ? 
                persons.map(p =>
                <TheNumber name={p.name} number={p.number} del={() => handleDelete(p.id)}/>)
                :
                searchList.map(p =>
                <TheNumber name={p.name} number={p.number} del={() => handleDelete(p.id)}/>
            )}

        </div>
    )
}        
        export default App