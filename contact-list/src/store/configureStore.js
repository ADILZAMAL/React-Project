import { configureStore } from "@reduxjs/toolkit";
import reducer from "./contact";
const store = configureStore({
  reducer,
});
export default store;
