import React from 'react'

function Person(props) {
  return (
    <div>
      <h3>Men kim Sohibqiron {props.name} and it is {props.age} old</h3>
      {props.children}

    </div>
  )
}

export default Person