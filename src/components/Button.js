import React from 'react'
import "../css/button.css"
import { Link } from 'gatsby'

const Button = (props) => (
	<Link to={props.path}>
 		<div className="buttonComponent">{props.text}</div>
 	</Link>
)

export default Button;