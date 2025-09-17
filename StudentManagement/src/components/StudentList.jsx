import React from 'react'
//careting a functional component
function StudentList({students})
{
    return(	
        <div>
            <h2>Students List</h2>
            {students.length == 0 ? (<p> No Student Found</p>):
            (
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Student id</th>
                            <th>Name</th>
                            <th>Standard</th>
                            <th>Roll Number</th>
                            <th>Age(in year)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {students.map((studentdata)=> (
                        <tr>
                            <td>{studentdata.stdid}</td>
                            <td>{studentdata.stdname}</td>
                            <td>{studentdata.standard}</td>
                            <td>{studentdata.roll}</td>
                            <td>{studentdata.age}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        )
}
export default StudentList