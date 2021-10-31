import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActiveUser } from "../redux/actionCreators";

function LoginPage() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const usersFromDataBase = useSelector((state) => {
    return state.users;
  });

  console.log(usersFromDataBase);

  const dispatch = useDispatch();

  const handleValueEmail = useCallback(
    (e) => {
      setValueEmail(e.target.value);
    },
    [setValueEmail],
  );

  const handleValuePassword = useCallback(
    (e) => {
      setValuePassword(e.target.value);
    },
    [setValuePassword],
  );

  const handleSigIn = (e) => {
    console.log("button event");
    e.preventDefault();
    usersFromDataBase.forEach((user) => {
      if (valueEmail === user.email && valuePassword === user.name) {
        dispatch(addActiveUser(user));
      }
    });
  };

  return (
    <div className="wrapper_login">
      <div>
        <label>Email address</label>
        <input type="email" placeholder="Enter email" value={valueEmail} onChange={handleValueEmail} />
        <p className="text-muted">We'll never share your email with anyone else.</p>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={valuePassword}
            onChange={handleValuePassword}
          />
        </div>
        <button type="submit" onClick={handleSigIn}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
