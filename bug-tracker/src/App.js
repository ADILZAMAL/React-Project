import React from "react";

import { store } from "./store";
import * as actions from "./action";
function App() {
  store.subscribe(() => {
    console.log("Store Changed", store.getState());
  });
  store.dispatch(actions.addBug("console not working"));
  store.dispatch(actions.addBug("Not giving output as expected"));
  store.dispatch(actions.addBug("push notification not working"));
store.dispatch(actions.removeBug(2));
store.dispatch(actions.resolveBug(1))
  console.log(store.getState());
  return <div className="App"></div>;
}

export default App;
