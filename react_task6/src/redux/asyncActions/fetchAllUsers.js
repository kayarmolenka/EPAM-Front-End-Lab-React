import { addAllUsersFromServer } from "../actionCreators";

export const fetchAllUsers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        dispatch(addAllUsersFromServer(users));
        // console.log(albums);
        // localStorage.setItem("albums", ...albums);
      })
      .catch((er) => console.log("ERRRROOR", er));
  };
};
