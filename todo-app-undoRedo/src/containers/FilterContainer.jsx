import React from "react";
import Filter from "../components/Filter";
import { addFilter } from "../store/filter";
import { useDispatch } from "react-redux";
export default function FilterContainer() {
  const dispatch = useDispatch();
  const arr = ["ALL", "ACTIVE", "COMPLETED"];
  return (
    <div>
      <Filter
        addFilter={(filter) => {
          dispatch(addFilter(filter));
        }}
        arr={arr}
      />
    </div>
  );
}
