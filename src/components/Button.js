import React from 'react'
import "../css/button.css"

const Button = (props) => (
	<div className="mainBtn">
 	  <div>{props.text}</div>
	</div>
)

export default Button