import React from 'react'

function Person(props) {
  return (
    <div>
      <h3 onClick={props.click}>{props.name} va {props.age} yoshdaman</h3>
    </div>
  )
}

export default Person