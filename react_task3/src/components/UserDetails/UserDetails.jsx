import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import "../../index.css";

function UserDetails(props) {
  return (
    <div className="user_details_wrapper">
      <Avatar />
      <UserInfo data={props.data} />
    </div>
  );
}

export default UserDetails;
