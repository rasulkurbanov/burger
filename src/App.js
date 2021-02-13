import './App.css';
import Person from './Person/Person'
import React, { useState } from 'react'

function App() {

  const [persons, setPersons] = useState([
    {id:1, name: "Max", age: 32 },
    {id: 2, name: "Akon", age: 42 },
    {id: 3, name: "Tima", age: 23 },
  ])


  function deletePersonHandler(personIndex) {
    persons.splice(personIndex, 1)
    setPersons(persons)
  }

  return (
    <div className="App">
      <header className="App-header">

        {
          persons.map((person, index) => {
            return (
              <Person 
              name={person.name}
              age={person.age}
              key={index}
              click={() => deletePersonHandler(index)}
              />
            )
          })
        }

      </header>
    </div>
  );
}

export default App;
