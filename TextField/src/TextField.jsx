import React, { useState } from 'react';

const TextField = () => {
    // create a state variable called studentname (empty at start)
    // setStudentname is the function that updates its value
    const [studentname, setStudentname] = useState();

    // function that runs when user types in the input box
    function displayName(event) {
        // take the typed value (event.target.value) 
        // and update the studentname state variable
        setStudentname(event.target.value);
    }

    return (
        <div>
            <h2>Text Field Example</h2>
            
            {/* Input field where user can type student name */}
            <p>
                Student Name : 
                <input 
                    type="text" 
                    name="stdname" 
                    value={studentname} 
                    onChange={displayName}  // call displayName whenever user types
                    placeholder="Enter the name of Student" 
                />
            </p>

            {/* Show the student name that user typed */}
            <p>
                Name of Student : <b>{studentname}</b> 
            </p>
        </div>
    )
}

export default TextField;
