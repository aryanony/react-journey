import React from 'react';
import { useForm } from 'react-hook-form';

const ProductRegistration = () => {
    // useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // submit handler
    function submithandler(formdata) {
        alert(
            `Your Product ID : ${formdata.prodid} 
            \n Your Product Name : ${formdata.prodname} 
            \n Product Quantity : ${formdata.prodquantity} 
            \n Product Price in Rs : ${formdata.prodprice}`
        );
    }

    return (
        <div>
            {/* Form UI */}
            <form onSubmit={handleSubmit(submithandler)}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Product Registration Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Product ID */}
                        <tr>
                            <td>Product ID : </td>
                            <td>
                                <input
                                    type="text"
                                    {...register("prodid", {
                                        required: "Enter Product ID",
                                        minLength: { value: 3, message: "ID must be at least 3 characters" }
                                    })}
                                />
                                <br />
                                {errors.prodid && <p style={{ color: 'red' }}>{errors.prodid.message}</p>}
                            </td>
                        </tr>

                        {/* Product Name */}
                        <tr>
                            <td>Product Name : </td>
                            <td>
                                <input
                                    type="text"
                                    {...register("prodname", {
                                        required: "Enter Product Name",
                                        minLength: { value: 4, message: "Name must be at least 4 characters" }
                                    })}
                                />
                                <br />
                                {errors.prodname && <p style={{ color: 'red' }}>{errors.prodname.message}</p>}
                            </td>
                        </tr>

                        {/* Product Quantity */}
                        <tr>
                            <td>Product Quantity : </td>
                            <td>
                                <input
                                    type="number"
                                    {...register("prodquantity", {
                                        required: "Enter Product Quantity",
                                        min: { value: 0, message: "If not available, value should be 0" }
                                    })}
                                />
                                <br />
                                {errors.prodquantity && <p style={{ color: 'red' }}>{errors.prodquantity.message}</p>}
                            </td>
                        </tr>

                        {/* Product Price */}
                        <tr>
                            <td>Product Price : </td>
                            <td>
                                <input
                                    type="number"
                                    {...register("prodprice", {
                                        required: "Enter Product Price",
                                        min: { value: 99, message: "Minimum price is Rs.99" },
                                        max: { value: 99999, message: "Maximum price is Rs.99999" }
                                    })}
                                />
                                <br />
                                {errors.prodprice && <p style={{ color: 'red' }}>{errors.prodprice.message}</p>}
                            </td>
                        </tr>
                    </tbody>

                    {/* Submit Button */}
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

export default ProductRegistration;
