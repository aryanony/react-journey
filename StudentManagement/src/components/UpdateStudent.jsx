import React,{useState} from 'react'
function UpdateStudent({students,updateStudentData})
{
    //creating a state variable of object type 
    const [selectedstudent, setSelectedstudent] = useState({
        stdid:"",
        stdname:"",
        standard:"",
        roll:"",
        age:""
    })
    //function to handle on change event in select tag
    function handleSelectEvent(event)
    {
        //getting the data of selected student from students'array
        const student = students.find(s => s.stdid === event.target.value)
        //setting data into statevariable
        setSelectedstudent(student)
    }
    //function for handling onchange event for input fileds
    function handleChangeEvent(event)
    {
        const {name,value} = event.target
        //updating state variable
        setSelectedstudent((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    //function to hanndle onsubmit event
    function handleSubmitEvent(event)
    {
        // Calling updateStudent function to update student data
        updateStudentData(selectedstudent)
        alert("Data Updated Successfully")
        setSelectedstudent({
            stdid:"",
            stdname:"",
            standard:"",
            roll:"",
            age:""
        })
    }
    //UI designing
    return(
            <div>
                <select value={selectedstudent.stdid} onChange={handleSelectEvent}>
                    <option value="">Select Student Id</option>
                    {students.map(student => (
                            <option key = {student.stdid} value={student.stdid}> 
                                {student.stdid}
                            </option>
                        ))}
                </select>
                <form onSubmit={handleSubmitEvent}>
                    Student Id : <input type="text" name="stdid" value={selectedstudent.stdid} onChange={handleChangeEvent} placeholder="Student id" />
                    <br/>
                    Student Name: <input type="text" name="stdname" value={selectedstudent.stdname} onChange={handleChangeEvent} placeholder="student Name" />
                    <br/>
                    Standard : <input type="text" name="standard" value={selectedstudent.standard} onChange={handleChangeEvent} placeholder="Standard" />
                    <br/>
                    Roll No. <input type= "number" name = "roll" value={selectedstudent.roll} onChange={handleChangeEvent} placeholder="Roll number" />
                    <br/>
                    Age(in Year) : <input type="number" name="age" value={selectedstudent.age} onChange={handleChangeEvent} placeholder="Age(in Year)" />
                    <br/>
                    <button type="submit">Update Student</button>
                </form>

            </div>
        )
}
export default UpdateStudent