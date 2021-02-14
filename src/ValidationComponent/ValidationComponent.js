import React from "react";

function ValidationComponent(props) {
  return (
    <div>
      <p>{
      props.output == 0 
      ? 
        null
      :
      props.output <= 5 
      ?
       'Text too short'
      : 
      props.output > 5 && props.output < 15 
      ?
        props.output
      : 
      props.output >= 15 
      ?
        'Text too long'
      :
      'OK!'
      }
      </p>
    </div>
  )
}

export default ValidationComponent