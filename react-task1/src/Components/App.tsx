import "../styles.css";
import state from "../state";
import UserDetails from "../Components/UserDetails/UserDetails";
import Content from "./Content";

function App() {
  return (
    <div className="wrapper-app">
      <UserDetails state={state} />
      <Content state={state.comments} />
    </div>
  );
}

export default App;
