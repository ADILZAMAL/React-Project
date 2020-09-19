import reducer from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
export default function () {
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger, toast],
  });
  return store;
}
