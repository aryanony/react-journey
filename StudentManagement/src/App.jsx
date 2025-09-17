import React,{ useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import UpdateStudent from './components/UpdateStudent.jsx'
import StudentRegistration from './components/StudentRegistration.jsx'
import StudentList from './components/StudentList.jsx'
function App() 
{
  //creating a state variable of array type to store students data
  const [students,setStudents] = useState([])

  // function to add new student data
  function addStudent(student)
  {
    //updating state variable
    setStudents([...students,student])
  }

  //function to update student data
  function updateStudentData(updatedStudent)
  {
    //to update student data
    setStudents(students.map(student => student.stdid === updatedStudent.stdid ? updatedStudent : student))
  }

  //function to delete student data
  function deleteStudent(stdid)
  {
    // to remove data
    setStudents(students.filter(student => student.stdid !== stdid))
  } 

  //designing the UI
  return(
      <Router>
        <div>
          <nav style={{backgroundColor:"blue" , padding:"10px"}}>
              <Link to='/updateStudent' style ={{marginRight : "10px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Update Student</Link>
              <Link to='/registerStudent' style ={{marginRight : "10px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Student Registration</Link>
              <Link to="/studentlist" style ={{marginRight : "10px",fontWeight:"bold",color:"white",textDecoration:"none"}}>Student List</Link>
          </nav>

          <Routes>
            <Route path="/updateStudent" element={<UpdateStudent students={students} updateStudentData ={updateStudentData} />} />
            <Route path="/registerStudent" element={<StudentRegistration addStudent={addStudent} />}/>
            <Route path="/studentlist" element = {<StudentList students={students} />} />
          </Routes>
        </div>
      </Router>
    )
}


export default App
