import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import { togoleActiveStatus } from "../store/todo";
export default function TodoListContainer() {
  const dispatch = useDispatch();
  let todos = useSelector((store) => store.todo.todos);
  const filter = useSelector((store) => store.todo.filter);
  switch (filter) {
    case "ALL":
      break;
    case "ACTIVE":
      todos = todos.filter((todo) => todo.active === true);
      break;
    case "COMPLETED":
      todos = todos.filter((todo) => todo.active === false);
      break;
  }
  const onClickHandler = (id) => {
    dispatch(togoleActiveStatus(id));
  };
  return (
    <div>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem togoleActiveStatus={onClickHandler} todo={todo} />
        ))}
      </TodoList>
    </div>
  );
}
