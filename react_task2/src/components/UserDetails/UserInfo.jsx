import { Component } from "react";

class UserInfo extends Component {
  render() {
    const user = this.props.data;
    return (
      <div className="user-info-wrapper">
        <div className="user-info-wrapper-username">
          <h1>User </h1>
        </div>
        <div className="user-info-wrapper-description">
          <ul>
            <li>
              <span>Name:</span> {user.name}
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
}

export default UserInfo;
