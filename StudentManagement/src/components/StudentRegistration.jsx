import React from 'react'
import {useForm} from 'react-hook-form'

//creating a functional component
function StudentRegistration({addStudent})
{
	//using useForm hook
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	//function for submit handler
	function submitEventHandler(data)
	{
		//passing form data to addStudent function received as props to insert new student data into the array
		addStudent(data)
		//reset form element to initial value
		reset()
		//displaying successful message in alert box
		alert("Student Registered Successfully")
	}
	//UI designing
	return(
			<div>
				<h2>Student Registration</h2>
				<form onSubmit={handleSubmit(submitEventHandler)}>
					<div>
						<label>Student id</label>
						<input {...register("stdid",{required:"Student id is required"})} />
						{errors.stdid && <p style={{color:"red"}}>{errors.stdid.message}</p>}
					</div>
					<div>
						<label>Student Name</label>
						<input {...register("stdname",{required:"Student Name is required"})} />
						{errors.stdname && <p style={{color:"red"}}>{errors.stdname.message}</p>}
					</div>
					<div>
						<label>Standard</label>
						<input {...register("standard",{required:"Standard is required"})} />
						{errors.standard && <p style={{color:"red"}}>{errors.standard.message}</p>}
					</div>
					<div>
						<label>Roll Number</label>
						<input {...register("roll",{required:"Roll Number is required",
							min:{value:1,message:"Less than 1 is not allowed"},
							max:{value:1000,message:"value more than 1000 not allowed"}
						})} />
						{errors.roll && <p style={{color:"red"}}>{errors.roll.message}</p>}
					</div>
					<div>
						<label>Age(in Year)</label>
						<input {...register("age",{required:"Age is required",
							min:{value:18,message:"Student of age less than 18 year not allowed"},
							max:{value:30,message:"Student of age more than 30 year not allowed"}
						})} />
						{errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
					</div>
					<input type="Submit" value="Register Student" />
				</form>
			</div>
		)

}
export default StudentRegistration