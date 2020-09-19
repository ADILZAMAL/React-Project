import React from "react";

import configureStore from "./store/configureStore";
import { addBug, assignUser, getBugsByUser } from "./store/bug";
import { addUser } from "./store/user";
const store = configureStore();
function App() {
  store.subscribe(() => {
    console.log("Store Changed", store.getState());
  });
  // store.dispatch(addBug({ description: "bug 1" }));
  // store.dispatch(addBug({ description: "bug " }));
  // store.dispatch(addBug({ description: "bug 3" }));
  // store.dispatch(addUser({ name: "Adil Zamal" }));
  // store.dispatch(addUser({ name: "Ram" }));
  // store.dispatch(assignUser({ bugId: 1, userId: 1 }));
  // const bug = getBugsByUser(1)(store.getState());
  // console.log(bug);
  // store.dispatch(actions.addProject({ description: "project 3" }));
  // store.dispatch(acrtions.)
  // store.dispatch(actions.removeBug({ id: 2 }));
  // store.dispatch(actions.resolveBug({ id: 1 }));
  // console.log(store.getState());
  store.dispatch({
    type: "error",
    payload: {
      message: "error",
    },
  });
  store.dispatch((dispatch, getState) => {
    //call an api
    //when the promise is resolved dispatch an action
    dispatch({
      type: "bugsReceived",
      bugs: [1, 2, 3],
    });
  });
  return <div className="App"></div>;
}

export default App;
