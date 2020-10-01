import React from "react";
import Undoredo from "../components/Undoredo";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
export default function UndoRedo() {
  const undoLength = useSelector((store) => store.todo.past.length > 0);
  const redoLength = useSelector((store) => store.todo.future.length > 0);
  const dispatch = useDispatch();
  const canUndo = () => {
    return undoLength > 0;
  };
  const canRedo = () => {
    return redoLength > 0;
  };

  return (
    <div>
      <Undoredo
        canRedo={canRedo}
        canUndo={canUndo}
        undo={() => {
          const action = ActionCreators.undo();
          dispatch(action);
          console.log("hi");
          //   ActionCreators.undo;
        }}
        redo={() => {
          dispatch(ActionCreators.redo());
        }}
      />
    </div>
  );
}
