import "../../styles.css";

function UserInfo({ state } : any) {
  return (
    <div className="user-info-wrapper">
      <div className="user-info-wrapper-username">
        <h1>User {state.username}</h1>
      </div>
      <div className="user-info-wrapper-description">
        <ul>
          <li>
            <span>Name:</span> {state.name}
          </li>
          <li>
            <span>Email:</span> {state.email}
          </li>
          <li>
            <span>City:</span> {state.address.city}
          </li>
          <li>
            <span>Street:</span> {state.address.street}
          </li>
          <li>
            <span>Website:</span> {state.website}
          </li>
          <li>
            <span>Work:</span> {state.company.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInfo;
