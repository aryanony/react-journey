import React from 'react'
/*--- functional component ---*/
function ProductList({productlist})
{
	/*---- UI designing ---*/
	return (
			<div>
				<h1> Product List </h1>
				{productlist.length == 0 ?
					(<p> No products Added </p>) : 
					(
						<table border="1">
							<thead>
								<tr>
									<th>Product id</th>
									<th>Product Name</th>
									<th>Quantity</th>
									<th>Price(in Rs.)</th>
								</tr>
							</thead>
							<tbody>
								{productlist.map((product) => (
									<tr>
										<td>{product.productId}</td>
										<td>{product.productName}</td>
										<td>{product.quantity}</td>
										<td>{product.price}</td>
									</tr>
									))}
							</tbody>
						</table>
					)
				}
			</div>
		)
}
export default ProductList
