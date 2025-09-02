import {useForm} from 'react-hook-form'

/*---- Functional Component ---*/
function ProductRegistration({addProducts})
{
	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	/*---- function to handle on submit chandle ----*/
	function submithandler(data)
	{
		/*--- inserting data into state variable by calling function being recived in props ---*/
		addProducts(data);
		/*-- reseting form elements ----*/
		reset()
		/*--- displaying successful message ---*/
		alert("Product successfully registered")
	}

	/*---- UI designing ----*/
	return (
    <div >
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Product ID:</label>
          <input {...register("productId", { required: "Product ID required" })} />
          {errors.productId && <p>{errors.productId.message}</p>}
        </div>
        <div>
          <label>Product Name:</label>
          <input {...register("productName", { required: "Name required" })} />
          {errors.productName && <p>{errors.productName.message}</p>}
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" {...register("quantity", { required: "Quantity required", min: 1 })} />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
        <div>
          <label>Price:</label>
          <input type="number" {...register("price", { required: "Price required", min: 1 })} />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );

}
export default ProductRegistration
