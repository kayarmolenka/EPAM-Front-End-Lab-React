import {
  ADD_ACTIVE_USER,
  ADD_ALL_USER,
  ADD_MANY_ALBUMS,
  ADD_MANY_PHOTOS,
  ADD_ONE_ALBUM,
  ADD_ONE_PHOTO,
  DELETE_ACTIVE_USER,
} from "./types";

export const addManyAlbums = (albums) => ({ type: ADD_MANY_ALBUMS, payload: albums });
export const addManyPhotos = (photos) => ({ type: ADD_MANY_PHOTOS, payload: photos });
export const addOneAlbums = (album) => ({ type: ADD_ONE_ALBUM, payload: album });
export const addOnePhotos = (photo) => ({ type: ADD_ONE_PHOTO, payload: photo });
export const addAllUsersFromServer = (users) => ({ type: ADD_ALL_USER, payload: users });
export const addActiveUser = (user) => ({ type: ADD_ACTIVE_USER, payload: user });
export const deleteActiveUser = (user) => ({ type: DELETE_ACTIVE_USER, payload: user });
