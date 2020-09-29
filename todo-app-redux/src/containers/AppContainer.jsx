import React from "react";
import AddTodoContainer from "./AddTodoContainer";
import TodoListContainer from "./TodoListContainer";
import FilterContainer from "./FilterContainer";

export default function AppContainer() {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <FilterContainer />
    </div>
  );
}
