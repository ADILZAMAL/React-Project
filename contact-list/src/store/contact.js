import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});
export const { addContact } = slice.actions;
export default slice.reducer;
