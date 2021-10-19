import { ADD_MANY_ALBUMS } from "../types";

const defaultState = [];

export default function albums(state = defaultState, action) {
  switch (action.type) {
    case ADD_MANY_ALBUMS:
      return [...action.payload];
    default:
      return state;
  }
}
