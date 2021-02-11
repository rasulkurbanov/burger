import './App.css';
import Person from './Person/Person'
import React, {useState} from 'react'

function App() {

  const [name, setName] = useState([
    {name: "Max", age: 32},
    {name: "Akon", age: 42},
    {name: "Tima", age: 23},
  ])
    

  function switchName() {
    setName([
      {name: "Jo'lol", age: 39},
      {name: "Paynetchi", age: 22},  
      {name: "Kimbu-o'zi", age: 53},
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Person name={name[1].name} age={name[1].age} />
        <button onClick={switchName}>Switch Name</button>
      </div>
      </header>
    </div>
  );
}

export default App;
