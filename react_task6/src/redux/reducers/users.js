import { ADD_ALL_USER } from "../types";

const defaultState = [];

export default function users(state = defaultState, action) {
  switch (action.type) {
    case ADD_ALL_USER:
      return [...action.payload];
    default:
      return state;
  }
}
