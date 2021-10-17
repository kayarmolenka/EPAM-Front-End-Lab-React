import { GET_USER_INFO } from "../types";
import stateUser from "../../state";

export default function userInfo(state = stateUser, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return state;
    default:
      return state;
  }
}
