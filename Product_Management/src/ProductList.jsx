import React from 'react';

/*--- Shows products in a table with Edit/Delete buttons ---*/
function ProductList({ productlist, onEdit, onDelete }) {
    return (
        <div>
            <h1>Product List</h1>

            {productlist.length === 0 ? (
                <p>No products added</p>
            ) : (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Product id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price (Rs.)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productlist.map((product) => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    {/* Edit → fills the form with this row’s data */}
                                    <button onClick={() => onEdit(product.productId)}>Edit</button>
                                    &nbsp;
                                    {/* Delete → removes this row */}
                                    <button onClick={() => onDelete(product.productId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductList;
