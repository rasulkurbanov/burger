import React from 'react'

function Person(props) {
  return (
    <div>
      <h3>Men kim Sohibqiron {props.name} va {props.age} yoshdaman</h3>
      
      <p onClick={props.click}>Click it</p>

      <input type="text" onChange={props.change}/>

    </div>
  )
}

export default Person