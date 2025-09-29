import { createSlice } from "@reduxjs/toolkit";

// Create a slice for products
const ProductSlice = createSlice({
  name: "products",

  // initialState must be 'initialState' (not initialStates)
  initialState: {
    products: [],
  },

  reducers: {
    // addProduct - push new product object (action.payload is a product)
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    // deleteProduct - remove product with matching proid
    deleteProduct: (state, action) => {
      const idToRemove = action.payload;
      state.products = state.products.filter((p) => p.proid !== idToRemove);
    },

    // updateProduct - find product by proid and update fields
    updateProduct: (state, action) => {
      const payload = action.payload;
      const found = state.products.find((p) => p.proid === payload.proid);
      if (found) {
        // update fields (keep other fields if any)
        found.proname = payload.proname;
        found.prosize = payload.prosize;
        found.proweight = payload.proweight;
        found.proprice = payload.proprice;
      }
    },
  },
});

// Export action creators
export const { addProduct, deleteProduct, updateProduct } =
  ProductSlice.actions;

// Export reducer
export default ProductSlice.reducer;
