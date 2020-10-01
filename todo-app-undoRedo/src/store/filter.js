import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "ALL",
  },
  reducers: {
    addFilter: (store, action) => {
      store.filter = action.payload;
      return;
    },
  },
});

export default filterSlice.reducer;
export const { addFilter } = filterSlice.actions;
