import React, { useState } from 'react';
import ProductRegistration from './ProductRegistration.jsx';
import ProductList from './ProductList.jsx';

function App() {
  // 1) Keep all products here
  const [products, setProducts] = useState([]);

  // 2) Keep track of which product is being edited (null = not editing)
  const [editingProductId, setEditingProductId] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  // 3) Add a new product OR update an existing one
  function addOrUpdateProduct(product) {
    if (editingProductId === null) {
      // Not editing → simply add
      setProducts([...products, product]);
    } else {
      // Editing → replace the old one by id
      const updated = products.map((p) =>
        p.productId === editingProductId ? product : p
      );
      setProducts(updated);
      // Clear editing state
      setEditingProductId(null);
      setProductToEdit(null);
    }
  }

  // 4) Start editing: find product and set it in state
  function handleEdit(productId) {
    const found = products.find((p) => p.productId === productId);
    setProductToEdit(found);
    setEditingProductId(productId);
  }

  // 5) Cancel editing and reset form state
  function cancelEdit() {
    setEditingProductId(null);
    setProductToEdit(null);
  }

  // 6) Delete a product by id
  function handleDelete(productId) {
    setProducts(products.filter((p) => p.productId !== productId));
    // If the deleted item was being edited, cancel edit mode
    if (editingProductId === productId) {
      cancelEdit();
    }
  }

  // 7) UI: Registration form + List
  return (
    <div>
      <ProductRegistration
        addOrUpdateProduct={addOrUpdateProduct}
        productToEdit={productToEdit}
        isEditing={editingProductId !== null}
        cancelEdit={cancelEdit}
      />

      <ProductList
        productlist={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
