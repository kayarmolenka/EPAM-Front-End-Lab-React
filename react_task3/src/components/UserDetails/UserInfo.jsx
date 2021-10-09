function UserInfo(props) {
  const user = props.data;
  return (
    <div className="user-info-wrapper">
      <div className="user-info-wrapper-username">
        <h1>Kanstantsin Yarmolenka </h1>
      </div>
      <div className="user-info-wrapper-description">
        <ul>
          <li>
            <span>Nickname:</span> {user.name}
          </li>
          <li>
            <span>Email:</span> {user.email}
          </li>
          <li>
            <span>City:</span> {user.address.city}
          </li>
          <li>
            <span>Street:</span> {user.address.street}
          </li>
          <li>
            <span>Website:</span> {user.website}
          </li>
          <li>
            <span>Work:</span> {user.company.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
