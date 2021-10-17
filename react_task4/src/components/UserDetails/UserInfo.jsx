import { useSelector } from "react-redux";

function UserInfo() {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div className="user-info-wrapper">
      <div className="user-info-wrapper-username">
        <h1>Kanstantsin Yarmolenka </h1>
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
    </div>
  );
}

export default UserInfo;
