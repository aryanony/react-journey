import React from 'react';
import Course from './Course';

// creating class component
class Faculty extends React.Component {
    // defining render method to produce output
    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <Course courseName="FrontEnd Web Dev" courseDuration="5 months" courseDetails="Web Development with React JS"/>
            </div>
        );
    }
}

export default Faculty;