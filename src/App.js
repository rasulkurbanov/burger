import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person'
import ValidationComponent from './ValidationComponent/ValidationComponent'

function App() {

  const [persons, setPersons] = useState([
    {id:1, name: "Max", age: 32 },
    {id: 2, name: "Akon", age: 42 },
    {id: 3, name: "Tima", age: 23 },
  ])

  const [output, setOutput] = useState(0)


  function deletePersonHandler(personIndex) {
    persons.splice(personIndex, 1)
    setPersons(persons)
  }

  function outputHandler(e) {
    let len = e.target.value
    setOutput(len.length)
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
        <input type="text" onChange={outputHandler}/>

        <ValidationComponent output={output}/>
      </header>
    </div>
  );
}

export default App;
