import React from 'react'
import "../css/header.css"

const Header = (props) => (
	<div className="title">
 	  <div>{props.text}</div>
	</div>
)

export default Header