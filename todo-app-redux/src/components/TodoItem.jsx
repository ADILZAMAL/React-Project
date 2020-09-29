import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <span
        onClick={() => {
          props.togoleActiveStatus(props.todo.id);
        }}
        style={{
          textDecorationLine: `${props.todo.active ? "" : "line-through"}`,
        }}
      >
        {props.todo.text}
      </span>
    </div>
  );
}
