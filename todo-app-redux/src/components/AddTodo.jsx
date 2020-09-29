import React, { useState } from "react";
export default function AddTodo(props) {
  const [text, setText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodoHandler(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter your todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
