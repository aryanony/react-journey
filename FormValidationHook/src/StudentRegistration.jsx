import React from 'react';
import { useForm } from 'react-hook-form';

const StudentRegistration = () => {
    // useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Submit handler
    function submithandler(formdata) {
        alert(
            `Student ID : ${formdata.stdid} \n Student Name : ${formdata.stdname} \n Student Age : ${formdata.age} years.`
        );
    }

    return (
        <div>
            {/* Form */}
            <form onSubmit={handleSubmit(submithandler)}>
                <table>
                    <thead>
                        <tr>
                            {/* In React, use colSpan */}
                            <th colSpan="2">Registration Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Student ID */}
                        <tr>
                            <td>Student I'D : </td>
                            <td>
                                <input
                                    type="text"
                                    {...register("stdid", {
                                        required: "Enter Student ID",
                                        minLength: { value: 4, message: "I'D must be at least 4 characters" }
                                    })}
                                />
                                <br />
                                {errors.stdid && <p>{errors.stdid.message}</p>}
                            </td>
                        </tr>

                        {/* Student Name */}
                        <tr>
                            <td>Student Name : </td>
                            <td>
                                <input
                                    type="text"
                                    {...register("stdname", {
                                        required: "Enter Student Name",
                                        minLength: { value: 4, message: "Name must be at least 4 characters" }
                                    })}
                                />
                                <br />
                                {errors.stdname && <p>{errors.stdname.message}</p>}
                            </td>
                        </tr>

                        {/* Student Age */}
                        <tr>
                            <td>Student Age : </td>
                            <td>
                                <input
                                    type="number"
                                    {...register("age", {
                                        required: "Enter Student Age",
                                        min: { value: 15, message: "Age must be more than 15" },
                                        max: { value: 30, message: "Age must be less than 31" }
                                    })}
                                />
                                <br />
                                {errors.age && <p>{errors.age.message}</p>}
                            </td>
                        </tr>
                    </tbody>

                    {/* Submit button */}
                    <tfoot>
                        <tr>
                            <th colSpan="2">
                                <input type="submit" value="Register" />
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    );
};

export default StudentRegistration;
