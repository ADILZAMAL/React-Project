import React from "react";

export default function Filter(props) {
  const filterArray = props.arr;
  return (
    <div>
      {filterArray.map((item) => (
        <button
          onClick={() => {
            props.addFilter(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
