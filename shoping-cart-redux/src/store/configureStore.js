import productReducer from "./product";
import cartReducer from "./cart";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../middleware/api";
const reducer = {
  product: productReducer,
  cart: cartReducer,
};
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), api],
});

export default store;
