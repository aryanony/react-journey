import React from 'react';

class Course extends React.Component {
    render(){
        // destructuring of the props

        const {courseName, courseDuration, courseDetails} = this.props;
        return(
            <>
            <h1>Course : </h1>
            <h2>Name of Course : {courseName}</h2>
            <h2>Duration of Course : {courseDuration}</h2>
            <h2>Course Details : {courseDetails}</h2>
            </>
        );
    }
}

export default Course;