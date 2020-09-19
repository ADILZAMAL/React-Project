import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//Reducer
let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    assignUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      console.log(bugs);
      const index = bugs.findIndex((bug) => bug.id === bugId);
      console.log(index);
      bugs[index].userId = userId;
    },
    addBug: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    removeBug: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    resolveBug: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export default slice.reducer;
export const { addBug, removeBug, resolveBug, assignUser } = slice.actions;

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
