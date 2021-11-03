import { combineReducers } from "redux";
import albums from "./albums";
import photos from "./photos";
import users from "./users";
import userAlbum from "./userAlbum";
import userInfo from "./userInfo";
import activeUser from "./activeUser";

export default combineReducers({
  albums,
  photos,
  userAlbum,
  userInfo,
  users,
  activeUser,
});
