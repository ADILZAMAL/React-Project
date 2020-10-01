import todoReducer from "./todo";
import filterReducer from "./filter";
const rootReducer = {
  todo: todoReducer,
  filter: filterReducer,
};

export default rootReducer;
