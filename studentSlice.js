import {createSlice} from '@reduxjs/toolkit';

//creating an object
const studentSlice = createSlice({
	name:"students",
	initialState : {students:[]},
	reducers : {
		addStudent:(state,action) => {
			/*-- inserting students data into array --*/
			state.students.push(action.payload) //action.payload is containing student object
		},
		deleteStudent:(state,action) => {
			/*--- deleting data of student from array ---*/
			state.students = state.students.filter((s) => s.stdid !== action.payload)
		},
		updateStandardAndRoll:(state,action) =>{
			//fetching data from action.payload
			const {stdid,standard,roll} = action.payload
			//to fetch data from array whose id is matching with stdid received in action.payload
			const studentData = state.students.find((student) => student.stdid === stdid)
			if(studentData)
			{
				//data found
				student.standard = standard
				student.roll = roll
			}
		},
		updateAge:(state,action)=>{
			//fetching data from action.payload
			const {stdid,age} = action.payload
			//to fetch data from array whose id is matching with stdid received in action.payload
			const studentData = state.students.find((student) => student.stdid === stdid)
			if(studentData)
			{
				//data found
				student.age = age
			}
		}
	}
})

//action creators automatically generated from the reducer names.
export const {addStudent,deleteStudent,updateStandardAndRoll,updateAge} = studentSlice.actions

//export reducers
export default studentSlice.reducer

