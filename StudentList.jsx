import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteStudent} from './studentSlice.js'

/*--- defining functional component ---*/
function StudentList()
{
	//creating hook to dispatch actions
	const dispatch = useDispatch()
	//fetching array data From Redux store
	const students = useSelector((state) => state.students.students)

	/*--- UI designing ---*/
	return(
		<>
			<h2> Student List </h2>
			{/*--- checking students array length ---*/}
			{students.length === 0 ? (<p> No students data found</p>) 
			: (
				<ul>
				{/* map through students array and displaying them-*/}
				{students.map((student) => (
						<li key = {student.stdid} style={{marginBottom:"10px"}}>
						Student Id : {student.stdid} | Student Name : {student.stdname} | Standard : {student.standard} | Roll No. : {student.roll} | Age : {student.age} year 
						<button onClick= {()=> dispatch(deleteStudent(student.stdid))}> Delete</button>
						</li>
					))}
				</ul>
				)}
		</>
		)
}
export default StudentList