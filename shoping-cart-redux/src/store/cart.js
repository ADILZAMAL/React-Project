import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (cart, action) => {
      const { id } = action.payload;
      const index = cart.cartItems.findIndex((item) => item.id === id);
      if (index > -1) cart.cartItems[index].count++;
      else {
        const product = { ...action.payload };
        product.count = 1;
        cart.cartItems.push(product);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
