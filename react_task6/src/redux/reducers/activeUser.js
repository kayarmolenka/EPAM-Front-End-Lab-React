import { ADD_ACTIVE_USER, DELETE_ACTIVE_USER } from "../types";

export default function activeUser(state = {}, action) {
  switch (action.type) {
    case ADD_ACTIVE_USER:
      localStorage.setItem("ActiveUser", JSON.stringify(action.payload));
      return { user: action.payload };
    case DELETE_ACTIVE_USER:
      return {};
    default:
      return state;
  }
}
