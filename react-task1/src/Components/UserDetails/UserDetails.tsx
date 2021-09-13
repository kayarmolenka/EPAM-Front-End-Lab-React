import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import "../../styles.css";

function UserDetails({ state } : any) {
  return (
    <div className="user-details-wrapper">
      <Avatar />
      <UserInfo state={state} />
    </div>
  );
}

export default UserDetails;
