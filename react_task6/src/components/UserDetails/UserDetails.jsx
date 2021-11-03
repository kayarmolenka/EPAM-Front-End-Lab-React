import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserDetails() {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const isLogged = localStorage.getItem("ActiveUser");
  const user = JSON.parse(isLogged);

  if (!isLogged) {
    history.push("/login");
  }

  return (
    <div className="user_details_wrapper">
      <Avatar />
      <Link to={`${url}/${user.id}`}>Open User Id</Link>
      <Switch>
        <Route path={`${path}/${user.id}`}>
          <UserInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default UserDetails;
