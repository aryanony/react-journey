import React, { useState } from 'react';  
// importing React and useState hook
// useState helps us to "remember and update values" in a component (like a memory box)

function Textfieldexample() {
	// --------------------------
	// 1️⃣ State for Faculty Name
	// --------------------------
	// facultyname = current value (like a small container that stores the name)
	// setFacultyname = function to update the facultyname value
	const [facultyname, setFacultyname] = useState('');
	// initially it's empty ('') because we don't have any name yet

	// function to update faculty name whenever we type in input
	function displayName(event) {
		// event.target.value = the new text entered by user
		setFacultyname(event.target.value); 
	}

	// --------------------------
	// 2️⃣ State for Faculty Age
	// --------------------------
	const [facultyage, setFacultyage] = useState('');
	// initially empty, will update when user types an age

	// function to update age
	function displayAge(event) {
		setFacultyage(event.target.value); 
	}

	// --------------------------
	// 3️⃣ State for Faculty Qualification
	// --------------------------
	const [facultyqualification, setFacultyqualification] = useState('');
	// here we will use inline function instead of separate function

	return (
		<div>
			<h2>Text field Example</h2>

			{/* Faculty Name Input */}
			<p>
				Faculty Name:
				{/* value = facultyname → shows current name
				    onChange = displayName → calls function when typing */}
				<input 
					type="text" 
					value={facultyname} 
					onChange={displayName} 
					placeholder="Enter name of Faculty" 
				/>
			</p>
			<p>Name of Faculty: {facultyname}</p>

			<br />

			{/* Faculty Age Input */}
			<p>
				Faculty Age:
				<input 
					type="text" 
					value={facultyage} 
					onChange={displayAge} 
					placeholder="Enter age of Faculty" 
				/>
			</p>
			<p>Age of Faculty: {facultyage}</p>

			<br />

			{/* Faculty Qualification Input */}
			<p>
				Faculty Qualification:
				{/* directly updating with inline arrow function */}
				<input 
					type="text" 
					value={facultyqualification} 
					onChange={(event) => setFacultyqualification(event.target.value)} 
					placeholder="Enter qualification of Faculty" 
				/>
			</p>
			<p>Qualification of Faculty: {facultyqualification}</p>
		</div>
	);
}

export default Textfieldexample;
