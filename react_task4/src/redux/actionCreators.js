import { ADD_MANY_ALBUMS, ADD_MANY_PHOTOS, ADD_ONE_ALBUM, ADD_ONE_PHOTO } from "./types";

export const addManyAlbums = (albums) => ({ type: ADD_MANY_ALBUMS, payload: albums });
export const addManyPhotos = (photos) => ({ type: ADD_MANY_PHOTOS, payload: photos });
export const addOneAlbums = (album) => ({ type: ADD_ONE_ALBUM, payload: album });
export const addOnePhotos = (photo) => ({ type: ADD_ONE_PHOTO, payload: photo });
