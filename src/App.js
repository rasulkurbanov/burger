import './App.css';
import Person from './Person/Person'
import React, {useState} from 'react'

function App() {

  const [name, setName] = useState([
    {name: "Max", age: 32},
    {name: "Akon", age: 42},
    {name: "Tima", age: 23},
  ])
    

  function switchName(newName, newAge) {
    setName([
      {name: newName, age: newAge},
      {name: "Akon", age: 42},  
      {name: 'Tima', age: 23},
    ])
  }


  function setAll(newName, newAge) {
    setName([{name: newName, age: newAge}])
  }

  function changeInput(event) {
    setName([{name: event.target.value}])
  }


  return (
    <div className="App">
      <header className="App-header">
      <div>
        <Person
          name={name[0].name}
          age={name[0].age} 
          click={() => switchName('Hakimboy', 20)} 
        />

        <Person
          name={name[1] ? name[1].name : 'Alibobo'}
          age={name[1]? name[1].age : 89} 
        />

        <Person
          name={name[2] ? name[2].name : 'Hojibobo'}
          age={name[2] ? name[2].age : 100} 
          change={changeInput}
        />


        <button onClick={setAll.bind(this, 'Jo\'lol', 99)}>Switch Name</button>
      </div>
      </header>
    </div>
  );
}

export default App;
