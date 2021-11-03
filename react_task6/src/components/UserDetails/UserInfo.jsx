import { Link } from "react-router-dom";
import { Route, useRouteMatch } from "react-router";
import Content from "../Content";

function UserInfo() {
  const userInfo = JSON.parse(localStorage.getItem("ActiveUser"));
  const { url, path } = useRouteMatch();

  return (
    userInfo && (
      <div className="user-info-wrapper">
        <div className="user-info-wrapper-username">
          <h1>{userInfo.username} </h1>
        </div>
        <div className="user-info-wrapper-description">
          <ul>
            <li>
              <span>Nickname:</span> {userInfo.name}
            </li>
            <li>
              <span>Email:</span> {userInfo.email}
            </li>
            <li>
              <span>City:</span> {userInfo.address.city}
            </li>
            <li>
              <span>Street:</span> {userInfo.address.street}
            </li>
            <li>
              <span>Website:</span> {userInfo.website}
            </li>
            <li>
              <span>Work:</span> {userInfo.company.name}
            </li>
          </ul>
        </div>
        <Link to={`${url}/albums`}>Show albums</Link>
        <Route path={`${path}/albums`}>
          <Content />
        </Route>
      </div>
    )
  );
}

export default UserInfo;
