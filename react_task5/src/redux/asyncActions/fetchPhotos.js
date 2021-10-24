import { addManyPhotos } from "../actionCreators";

export const fetchPhotos = (activeAlbum) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${activeAlbum.id}/photos`)
      .then((res) => res.json())
      .then((photos) => {
        dispatch(addManyPhotos(photos));
      })
      .catch((er) => console.log("ERRRROOR", er));
  };
};
