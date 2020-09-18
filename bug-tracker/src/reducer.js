import * as actionType from "./actionType";
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case "BUG_ADD":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "BUG_REMOVE":
      return state.filter((bug) => bug.id != action.payload.id);
    case actionType.BUG_RESOLVE:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
