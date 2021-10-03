import { Component } from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

class UserDetails extends Component {
  render() {
    return (
      <div className="user_details_wrapper">
        <Avatar />
        <UserInfo data={this.props.data} />
      </div>
    );
  }
}

export default UserDetails;
