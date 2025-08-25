import React, { useState } from 'react';
import StudentDetails from './StudentDetails';

const StudentRegistration = () => {
    // creating state variable (like a storage box for form data)
    const [student, setStudent] = useState({
        stdName: '',
        stdStandard: '',
        stdAge: '',
    });

    // function to change the state variables when user types
    function updateData(event) {
        // getting field name & value from the input
        const { name, value } = event.target;

        // updating only that field, keeping other data same
        setStudent((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    // function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // stop page reload
        // alert(`Student Registered: ${student.stdName}, Class: ${student.stdStandard}, Age: ${student.stdAge}`);
    }

    return (
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                Student Name :
                <input
                    type='text'
                    value={student.stdName}
                    name='stdName'
                    onChange={updateData}
                    placeholder="Enter Student Name"
                />
                <br /> <br />

                Student Standard :
                <input
                    type='text'
                    value={student.stdStandard}
                    name='stdStandard'
                    onChange={updateData}
                    placeholder="Enter Student Standard"
                />
                <br /> <br />

                Student Age :
                <input
                    type='text'
                    value={student.stdAge}
                    name='stdAge'
                    onChange={updateData}
                    placeholder="Enter Student Age"
                />
                <br /> <br />

                <button type='submit'>Submit</button>
            </form>
            <div>
                <h3>Name of Student : {student.stdName}</h3>

                <h3>Standard of Student : {student.stdStandard}</h3>

                <h3>Age of Student : {student.stdAge}</h3>
            </div>
            <div>
                <h2>---Student Details---</h2>
                    <StudentDetails name={student.stdName} standard={student.stdStandard} age={student.stdAge}/>
            </div>
        </div>
    )
}

export default StudentRegistration;
