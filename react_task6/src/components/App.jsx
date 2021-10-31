import "../index.css";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";
import ScrollItem from "./ScrollItem";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonLogOut from "./ButtonLogOut";
import Home from "./Home";

function App() {
  return (
    <div className="wrapper-app">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/albums">Albums</Link>
          <Link to="/login">Login</Link>
          <Link to="/user">User</Link>
          <ButtonLogOut />
        </nav>
        <Switch>
          <Route path="/user">
            <UserDetails />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/albums">
            <Content />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <ScrollItem />
    </div>
  );
}

export default App;
