import { addManyAlbums } from "../actionCreators";

export const fetchAlbums = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((albums) => {
        dispatch(addManyAlbums(albums));
      })
      .catch((er) => console.log("ERRRROOR", er));
  };
};
