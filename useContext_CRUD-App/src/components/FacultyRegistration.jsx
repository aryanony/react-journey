import React from 'react'
import { useForm } from 'react-hook-form'

const FacultyRegistration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        addFaculty(data);
        reset();
        alert("Faculty Registered Successfully");
    };

    return (
        <>

            <table>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <thead>
                        <tr>
                            <th>Faculty Registration Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Faculty Name : </td>
                            <td><input type='text' {...register('facname', {
                                required: "Enter Faculty Name",
                                minLength: { value: 4, message: "Name length must be atleast 4 character." }
                            })} />
                                <br />
                                {errors.facname && <p>{facname.errors.message}</p>}
                            </td>
                        </tr>
                        <tr>
                            <td>Faculty Subject : </td>
                            <td><input type='text' {...register('facsub', {
                                required: "Enter Faculty Subject",
                                minLength: { value: 4, message: "Subject length must be atleact 4 character." }
                            })} />
                                <br />
                                {errors.facsub && <p>{facsub.errors.message}</p>}
                            </td>
                        </tr>
                        <tr>
                            <td>Faculty Age : </td>
                            <td><input type='number' {...register('facage',{
                                required: "Enter Faculty Age",
                                min: {value: 18, message:"Age must be more than 18."}
                                max: {value: 40, message:"Age must be less than 40."}
                            })} />
                            <br />
                            {errors.facage && <p>{errors.facage.message}</p>}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                                <input type='submit' value='Register' />
                            </th>
                        </tr>
                    </tfoot>
                </form>
            </table>
        </>
    )
}

export default FacultyRegistration