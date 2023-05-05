import React from "react";
import './UserOutput.css'

const userOutput = (props) =>{
  return(
    <div>
      <p>This is amaizing. your name is <span className="input">{props.userName}</span> </p>
      <p>Hello how are you doing. your last name is <span className="input">{props.userName}</span></p>
    </div>

  )
}
export default userOutput;