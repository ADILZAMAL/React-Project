import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        description: {
          name: action.payload.description,
        },
      });
    },
  },
});

export default slice.reducer;
export const { addProject } = slice.actions;
