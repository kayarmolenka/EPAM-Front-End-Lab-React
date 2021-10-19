import { ADD_MANY_PHOTOS, ADD_ONE_PHOTO } from "../types";

const defaultState = [];

export default function photos(state = defaultState, action) {
  switch (action.type) {
    case ADD_MANY_PHOTOS:
      return [...action.payload];
    case ADD_ONE_PHOTO:
      return [...state, action.payload];
    default:
      return state;
  }
}
