import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { deleteActiveUser } from "../redux/actionCreators";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(deleteActiveUser());
    localStorage.removeItem("ActiveUser");
    history.push("/");
  };

  return <button onClick={handleLogOut}>Log out</button>;
};

export default ButtonLogOut;
