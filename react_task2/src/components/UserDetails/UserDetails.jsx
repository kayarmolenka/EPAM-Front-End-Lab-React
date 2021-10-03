import { Component } from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

class UserDetails extends Component {
  render() {
    return (
      <div className="user_details_wrapper">
        <Avatar />
        <UserInfo userInfo={this.props.userInfo} />
      </div>
    );
  }
}

export default UserDetails;
