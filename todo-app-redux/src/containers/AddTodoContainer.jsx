import React from "react";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../store/todo";
import { useDispatch } from "react-redux";
let lastId = 0;
export default function AddTodoContainer() {
  const dispatch = useDispatch();
  const addTodoHandler = (text) => {
    dispatch(
      addTodo({
        text,
        active: true,
        id: ++lastId,
      })
    );
  };
  return (
    <div>
      <AddTodo addTodoHandler={addTodoHandler} />
    </div>
  );
}
