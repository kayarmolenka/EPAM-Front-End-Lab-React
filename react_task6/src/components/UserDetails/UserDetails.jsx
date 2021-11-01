import { Route, useHistory } from "react-router";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserDetails() {
  const history = useHistory();

  const isLogged = localStorage.getItem("ActiveUser");

  if (!isLogged) {
    history.push("/login");
  }
  return (
    <div className="user_details_wrapper">
      <Avatar />
      <Route path="/user/:id">
        <UserInfo />
      </Route>
    </div>
  );
}

export default UserDetails;
