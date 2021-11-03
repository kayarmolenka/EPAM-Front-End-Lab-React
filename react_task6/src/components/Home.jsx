import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const isLogged = localStorage.getItem("ActiveUser");

  if (isLogged) {
    history.push("/user");
  } else {
    history.push("/albums");
  }

  return <div>Welcome</div>;
}

export default Home;
