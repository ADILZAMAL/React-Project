import { combineReducers } from "redux";
import bugReducer from "./bug";
import projectReducer from "./project";
import userReducer from "./user";
export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  user: userReducer,
});
