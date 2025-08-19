import React from 'react';
// Functional Component
function Student(props) {
    return (
        <div>
            <h2>Student Component</h2>
            <h3>Name Of Student: {props.stdname}</h3>
            <h3>Age Of student: {props.age} Year</h3>
            <h3>Course Of The Student: {props.course}</h3>
        </div>
    )
}


export default Student;