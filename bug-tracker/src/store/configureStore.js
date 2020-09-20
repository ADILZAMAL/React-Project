import reducer from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";
export default function () {
  const store = configureStore({
    reducer,
    // middleware: [...getDefaultMiddleware(), api],
  });
  return store;
}
