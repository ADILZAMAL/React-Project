import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filter: "ALL",
  },
  reducers: {
    addTodo: (store, action) => {
      store.todos.push(action.payload);
    },
    togoleActiveStatus: (store, action) => {
      const id = action.payload;

      const index = store.todos.findIndex((todo) => todo.id == id);
      if (index > -1) {
        store.todos[index].active = !store.todos[index].active;
      }
    },
    addFilter: (store, action) => {
      store.filter = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, togoleActiveStatus, addFilter } = todoSlice.actions;
