import { combineReducers } from "redux";
import albums from "./albums";
import photos from "./photos";
import userAlbum from "./userAlbum";
import userInfo from "./userInfo";

export default combineReducers({
  albums,
  photos,
  userAlbum,
  userInfo,
});
