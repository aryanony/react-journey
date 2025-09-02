import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

/*--- Form to Add or Update product ---*/
function ProductRegistration({ addOrUpdateProduct, productToEdit, isEditing, cancelEdit }) {
    // useForm controls the form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // If editing: load values into the form. If not: clear the form.
    useEffect(() => {
        if (productToEdit) {
            // Put the product values into the form
            reset(productToEdit);
        } else {
            // Empty form for adding new product
            reset({
                productId: '',
                productName: '',
                quantity: '',
                price: '',
            });
        }
    }, [productToEdit, reset]);

    // When form is submitted
    function onSubmit(data) {
        // Send data to parent (App) to add or update product
        addOrUpdateProduct(data);

        // If we were adding (not editing), clear form for next item
        if (!isEditing) {
            reset();
            alert('Product successfully registered');
        } else {
            alert('Product successfully updated');
        }
    }

    return (
        <div>
            <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>

            {/* handleSubmit prevents page reload and validates before onSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Product ID:</label>
                    <input
                        // When editing, we lock ID to keep update logic simple
                        disabled={isEditing}
                        {...register('productId', { required: 'Product ID required' })}
                    />
                    {errors.productId && <p style={{ color: 'red' }}>{errors.productId.message}</p>}
                </div>

                <div>
                    <label>Product Name:</label>
                    <input
                        {...register('productName', { required: 'Name required' })}
                    />
                    {errors.productName && <p style={{ color: 'red' }}>{errors.productName.message}</p>}
                </div>

                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        {...register('quantity', {
                            required: 'Quantity required',
                            min: { value: 1, message: 'Quantity must be at least 1' },
                        })}
                    />
                    {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity.message}</p>}
                </div>

                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        {...register('price', {
                            required: 'Price required',
                            min: { value: 1, message: 'Price must be at least 1' },
                        })}
                    />
                    {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                </div>

                {/* Submit button text changes based on mode */}
                <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>

                {/* Show cancel button only in edit mode */}
                {isEditing && (
                    <>
                        &nbsp;
                        <button type="button" onClick={cancelEdit}>Cancel</button>
                    </>
                )}
            </form>
        </div>
    );
}

export default ProductRegistration;
