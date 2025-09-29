import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "./ProductSlice";

// Simple, clean registration form with inline styling
const formWrap = {
    background: "#ffffff",
    padding: 16,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    maxWidth: 700,
    marginBottom: 24,
};

const rowStyle = { display: "flex", gap: 12, alignItems: "center", marginBottom: 10 };
const labelStyle = { minWidth: 120, fontWeight: 600 };

const ProductRegistration = () => {
    // Redux dispatch
    const dispatch = useDispatch();

    // react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // when user submits form
    function submitHandler(data) {
        // ensure proid is string (or you can keep number)
        // Dispatch addProduct action with product object
        dispatch(addProduct(data));

        // reset the form for next entry
        reset();

        // notify user
        alert("Product Registered Successfully");
    }

    return (
        <div style={formWrap}>
            <h2 style={{ marginTop: 0 }}>Add Product</h2>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={rowStyle}>
                    <label style={labelStyle}>Product ID</label>
                    <input
                        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
                        {...register("proid", { required: "Product ID is required" })}
                        placeholder="e.g. P001"
                    />
                </div>
                {errors.proid && <p style={{ color: "crimson", marginTop: -8 }}>{errors.proid.message}</p>}

                <div style={rowStyle}>
                    <label style={labelStyle}>Product Name</label>
                    <input
                        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
                        {...register("proname", { required: "Product Name is required" })}
                        placeholder="e.g. Wireless Mouse"
                    />
                </div>
                {errors.proname && <p style={{ color: "crimson", marginTop: -8 }}>{errors.proname.message}</p>}

                <div style={rowStyle}>
                    <label style={labelStyle}>Size</label>
                    <input
                        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
                        {...register("prosize", { required: "Size is required" })}
                        placeholder="L x W (inch) e.g. 5x3"
                    />
                </div>
                {errors.prosize && <p style={{ color: "crimson", marginTop: -8 }}>{errors.prosize.message}</p>}

                <div style={rowStyle}>
                    <label style={labelStyle}>Weight (gm)</label>
                    <input
                        type="number"
                        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
                        {...register("proweight", { required: "Weight is required" })}
                        placeholder="e.g. 120"
                    />
                </div>
                {errors.proweight && <p style={{ color: "crimson", marginTop: -8 }}>{errors.proweight.message}</p>}

                <div style={rowStyle}>
                    <label style={labelStyle}>Price (Rs.)</label>
                    <input
                        type="number"
                        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
                        {...register("proprice", { required: "Price is required", min: { value: 1, message: "Minimum price is 1" } })}
                        placeholder="e.g. 499"
                    />
                </div>
                {errors.proprice && <p style={{ color: "crimson", marginTop: -8 }}>{errors.proprice.message}</p>}

                <div style={{ textAlign: "right", marginTop: 12 }}>
                    <button
                        type="submit"
                        style={{
                            background: "#06b6d4",
                            color: "white",
                            padding: "10px 14px",
                            borderRadius: 8,
                            border: "none",
                            fontWeight: 700,
                            cursor: "pointer",
                        }}
                    >
                        Register Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductRegistration;
