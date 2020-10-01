import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import undoable, { distinctState } from "redux-undo";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
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
  },
});
const undoableReducer = undoable(todoSlice.reducer);

export default undoableReducer;
export const { addTodo, togoleActiveStatus } = todoSlice.actions;
