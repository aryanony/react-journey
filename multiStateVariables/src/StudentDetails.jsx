import React from 'react'

const StudentDetails = (props) => {
    return (
        <div>
            <h3>Name of Student : {props.name}</h3>

                <h3>Standard of Student : {props.standard}</h3>

                <h3>Age of Student : {props.age}</h3>
        </div>
    )
}

export default StudentDetails