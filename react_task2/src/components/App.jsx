import "../App.css";
import { Component } from "react";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";
import state from "../state";

class App extends Component {
  render() {
    return (
      <div className="wrapper-app">
        <UserDetails data={state} />
        <Content />
      </div>
    );
  }
}

export default App;
