import "../index.css";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";

function App() {
  return (
    <div className="wrapper-app">
      <UserDetails />
      <Content />
    </div>
  );
}

export default App;
