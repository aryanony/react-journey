import React from 'react';

class Student extends React.Component {
    render() {
        return (
            <>
                <h2>Student Details : </h2>
                <h3>Student Name : {this.props.name} </h3>
                <h3>Student Age : {this.props.age} </h3>
            </>
        );
    }
}

export default Student;