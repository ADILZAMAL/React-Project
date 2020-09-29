import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
  },
  reducers: {
    receiveProducts: (store, action) => {
      store.isLoading = true;
    },
    receiveProductsSuccess: (store, action) => {
      store.products = action.payload;
      store.isLoading = false;
    },
    receiveProductsFailure: (store, action) => {},
    buyProduct: (store, action) => {
      const { id } = action.payload;
      console.log(id);
      const index = store.products.findIndex((product) => product.id === id);
      store.products[index].inventory--;
    },
  },
});

export default productSlice.reducer;
export const {
  receiveProducts,
  receiveProductsSuccess,
  receiveProductsFailure,
  buyProduct,
} = productSlice.actions;
