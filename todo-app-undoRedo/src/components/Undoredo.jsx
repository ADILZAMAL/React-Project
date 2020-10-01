import React from "react";

export default function UndoRedo({ canUndo, canRedo, undo, redo }) {
  return (
    <div>
      <button disabled={!canUndo()} onClick={undo}>
        Undo
      </button>
      <button disabled={!canRedo()} onClick={redo}>
        Redo
      </button>
    </div>
  );
}
