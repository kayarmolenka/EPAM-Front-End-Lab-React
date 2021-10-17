import { ADD_ONE_ALBUM } from "../types";

const defaultState = {
  userAlbum: [],
};

export default function userAlbum(state = defaultState, action) {
  switch (action.type) {
    case ADD_ONE_ALBUM:
      return { ...state, userAlbum: [...state.userAlbum, action.album] };
    default:
      return state;
  }
}
