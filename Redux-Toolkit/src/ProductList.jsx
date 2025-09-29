import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./ProductSlice";

// Styles
const cardStyle = {
    background: "#ffffff",
    padding: 16,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};
const itemStyle = { display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" };

const ProductList = () => {
    const dispatch = useDispatch();

    // Get products array from Redux store (state.products.products)
    const products = useSelector((state) => state.products.products);

    // Local state for inline editing
    const [editingId, setEditingId] = useState(null);
    const [editValues, setEditValues] = useState({
        proid: "",
        proname: "",
        prosize: "",
        proweight: "",
        proprice: "",
    });

    // Start editing a product: populate edit form fields
    function startEdit(product) {
        setEditingId(product.proid);
        setEditValues({ ...product });
    }

    // Cancel editing
    function cancelEdit() {
        setEditingId(null);
        setEditValues({ proid: "", proname: "", prosize: "", proweight: "", proprice: "" });
    }

    // Save edited product: dispatch updateProduct
    function saveEdit() {
        // Basic validation: ensure product id & name exist
        if (!editValues.proid || !editValues.proname) {
            alert("Please fill Product ID and Name");
            return;
        }
        dispatch(updateProduct(editValues));
        cancelEdit();
    }

    return (
        <div style={cardStyle}>
            <h2 style={{ marginTop: 0 }}>Product List</h2>

            {products.length === 0 ? (
                <p style={{ color: "#64748b" }}>No products present. Add products from registration page.</p>
            ) : (
                <div>
                    {products.map((product) => (
                        <div key={product.proid} style={itemStyle}>
                            {/* If this product is being edited, show inputs, else show display */}
                            {editingId === product.proid ? (
                                <>
                                    <input
                                        value={editValues.proid}
                                        onChange={(e) => setEditValues((s) => ({ ...s, proid: e.target.value }))}
                                        style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1", minWidth: 80 }}
                                    />
                                    <input
                                        value={editValues.proname}
                                        onChange={(e) => setEditValues((s) => ({ ...s, proname: e.target.value }))}
                                        style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1", minWidth: 160, flex: 1 }}
                                    />
                                    <input
                                        value={editValues.prosize}
                                        onChange={(e) => setEditValues((s) => ({ ...s, prosize: e.target.value }))}
                                        style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1", minWidth: 90 }}
                                    />
                                    <input
                                        type="number"
                                        value={editValues.proweight}
                                        onChange={(e) => setEditValues((s) => ({ ...s, proweight: e.target.value }))}
                                        style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1", minWidth: 90 }}
                                    />
                                    <input
                                        type="number"
                                        value={editValues.proprice}
                                        onChange={(e) => setEditValues((s) => ({ ...s, proprice: e.target.value }))}
                                        style={{ padding: 8, borderRadius: 6, border: "1px solid #cbd5e1", minWidth: 100 }}
                                    />
                                    <div>
                                        <button
                                            onClick={saveEdit}
                                            style={{
                                                background: "#059669",
                                                color: "white",
                                                padding: "8px 10px",
                                                borderRadius: 8,
                                                border: "none",
                                                marginRight: 8,
                                                cursor: "pointer",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            style={{
                                                background: "#ef4444",
                                                color: "white",
                                                padding: "8px 10px",
                                                borderRadius: 8,
                                                border: "none",
                                                cursor: "pointer",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Display product fields */}
                                    <div style={{ minWidth: 80, fontWeight: 700 }}>{product.proid}</div>
                                    <div style={{ minWidth: 160, flex: 1 }}>{product.proname}</div>
                                    <div style={{ minWidth: 90 }}>{product.prosize}</div>
                                    <div style={{ minWidth: 90 }}>{product.proweight} gm</div>
                                    <div style={{ minWidth: 100, fontWeight: 800 }}>Rs. {product.proprice}</div>

                                    {/* Action buttons: Edit and Delete */}
                                    <div>
                                        <button
                                            onClick={() => startEdit(product)}
                                            style={{
                                                background: "#2563eb",
                                                color: "white",
                                                padding: "8px 10px",
                                                borderRadius: 8,
                                                border: "none",
                                                marginRight: 8,
                                                cursor: "pointer",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => dispatch(deleteProduct(product.proid))}
                                            style={{
                                                background: "#ef4444",
                                                color: "white",
                                                padding: "8px 10px",
                                                borderRadius: 8,
                                                border: "none",
                                                cursor: "pointer",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
