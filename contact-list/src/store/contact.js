import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    checkedId: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    updateContact: ({ contacts }, action) => {
      const id = action.payload.id;
      let index = contacts.findIndex((contact) => {
        if (contact.id == id) return true;
      });
      contacts[index] = action.payload;
    },
    deleteContact: (state, action) => {
      const id = action.payload.id;
      const index = state.contacts.findIndex((contact) => {
        if (id == contact.id) return true;
      });
      state.contacts.splice(index, 1);
    },
    insertCheckedId: (state, action) => {
      state.checkedId.push(action.payload.id);
    },
    removeCheckedId: (state, action) => {
      const id = action.payload.id;
      const index = state.checkedId.findIndex((Id) => id == Id);
      state.checkedId.splice(index, 1);
    },
    delteChecked: (state, action) => {
      for (let i = 0; i < state.checkedId.length; i++) {
        const id = state.checkedId[i];
        const index = state.contacts.findIndex((contact) => {
          if (id == contact.id) return true;
        });
        state.contacts.splice(index, 1);
      }

      state.checkedId = [];
    },
    selectAll: (state, action) => {
      state.checkedId = [];
      for (let i = 0; i < state.contacts.length; i++) {
        state.checkedId.push(state.contacts[i].id);
      }
    },
    removeAll: (state, action) => {
      state.checkedId = [];
    },
  },
});
export const {
  addContact,
  updateContact,
  deleteContact,
  insertCheckedId,
  delteChecked,
  removeCheckedId,
  selectAll,
  removeAll,
} = slice.actions;
export default slice.reducer;
