import React, { useState } from 'react';

const CourseRegistration = () => {
    // creating a state variable
    const [courseData, setCourseData] = useState({
        courseId: '',
        courseName: '',
        courseDuration: '',
        courseFee: '',
    });

    // defining a function to handle onChange event
    function updateData(event) {
        const { name, value } = event.target;

        // update the state
        setCourseData((prevData) => ({
            ...prevData,   // keep old values
            [name]: value, // update only the changed input
        }));
    }

    // defining a function to handle onSubmit event
    function handleSubmit(event) {
        event.preventDefault(); // prevent page refresh
        console.log("Form submitted: ", courseData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table >
                    <thead>
                        <tr>
                            {/* React requires colSpan (not colspan) */}
                            <th colSpan="2">Course Registration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Course Id : </td>
                            <td>
                                <input
                                    type="text"
                                    name="courseId"
                                    value={courseData.courseId}
                                    onChange={updateData}
                                    placeholder="Enter Course Id"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Course Name : </td>
                            <td>
                                <input
                                    type="text"
                                    name="courseName"
                                    value={courseData.courseName}
                                    onChange={updateData}
                                    placeholder="Enter Course Name"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Course Duration (in Hours) : </td>
                            <td>
                                <input
                                    type="text"
                                    name="courseDuration"
                                    value={courseData.courseDuration}
                                    onChange={updateData}
                                    placeholder="Enter Course Duration"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Course Fee : </td>
                            <td>
                                <input
                                    type="text"
                                    name="courseFee"
                                    value={courseData.courseFee}
                                    onChange={updateData}
                                    placeholder="Enter Course Fee"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Register</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CourseRegistration;
