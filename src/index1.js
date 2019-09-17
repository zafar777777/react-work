import React from 'react'
import ReactDOM from 'react-dom'


let nameee='rajooo'
let obj = {
	fname: 'malik',
	lname: 'muzaffar'
}

function cartoon(name='picachu',show='pokemon') {
	return <div>
	<h1 className='some'>cartoon func applied by {nameee}</h1>
	<h2>{name}---{show}</h2>
	</div>
}
ReactDOM.render(

	cartoon('raja','jumpy'),
	//cartoon(),
	//<h1>WELCOME {obj.fname} {obj.lname}</h1>,
	document.getElementById('root')
	);
