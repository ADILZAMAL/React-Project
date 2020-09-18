import reducer from "./reducer";
function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    //call the reducer to get the new state
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
