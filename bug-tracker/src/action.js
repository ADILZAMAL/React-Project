import * as actions from "./actionType";

export const addBug = (description) => ({
  type: actions.BUG_ADD,
  payload: {
    description,
  },
});

export const removeBug = (id) => ({
  type: actions.BUG_REMOVE,
  payload: {
    id,
  },
});

export const resolveBug = (id) => ({
  type: actions.BUG_RESOLVE,
  payload: {
    id,
  },
});
