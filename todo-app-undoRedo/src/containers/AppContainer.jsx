import React from "react";
import AddTodoContainer from "./AddTodoContainer";
import TodoListContainer from "./TodoListContainer";
import FilterContainer from "./FilterContainer";
import UndoRedo from "./UndoRedo";
export default function AppContainer() {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <FilterContainer />
      <UndoRedo />
    </div>
  );
}
