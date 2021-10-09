import "../index.css";
import Content from "../components/ContentDetails/Content";
import UserDetails from "../components/UserDetails/UserDetails";
import state from "../state";

function App() {
  return (
    <div className="wrapper-app">
      <UserDetails data={state} />
      <Content />
    </div>
  );
}

export default App;
