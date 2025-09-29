import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addStudent } from './studentSlice.js';

/*--- Defining a functional component ---*/
function StudentRegistration() {
	//using useDispatch() hook to dispatch actions to store
	const dispatch = useDispatch()

	//initializing useForm() hook
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	//function to handle on submit evnt of form
	function submitHandler(data) {
		// dispatching addStudent action with form data
		dispatch(addStudent(data))
		alert("Student registered successfully")
		//to reset form to initial state
		reset()
	}

	//UI designing
	return (
		<>
			<form onSubmit={handleSubmit(submitHandler)} style={{ marginBottom: "20px" }}>

				{/*--- Field of input of student id ---*/}
				<div>
					Student Id : <input type="text" {...register("stdid", { required: "Student id cannot be empty" })} />
					{errors.stdid && (<p style={{ color: "red" }}>{errors.stdid.message}</p>)}
				</div>
				{/*--- Field of input of student name ---*/}
				<div>
					Student Name : <input type="text" {...register("stdname", { required: "Student Name cannot be empty" })} />
					{errors.stdname && (<p style={{ color: "red" }}>{errors.stdname.message}</p>)}
				</div>
				{/*--- Field of input of standard ---*/}
				<div>
					Standard : <input type="text" {...register("standard", { required: "Standard cannot be empty" })} />
					{errors.standard && (<p style={{ color: "red" }}>{errors.standard.message}</p>)}
				</div>
				{/*--- Field of input of Roll number---*/}
				<div>
					Roll No. : <input type="text" {...register("roll", { required: "Roll cannot be empty" })} />
					{errors.roll && (<p style={{ color: "red" }}>{errors.roll.message}</p>)}
				</div>
				{/*--- Field of input of age ---*/}
				<div>
					Age(in Year) : <input type="text" {...register("age", { required: "Age cannot be empty" })} />
					{errors.age && (<p style={{ color: "red" }}>{errors.age.message}</p>)}
				</div>
				{/*--- Submit button ---*/}
				<button type="submit">Register</button>
			</form>
		</>
	)

}
export default StudentRegistration