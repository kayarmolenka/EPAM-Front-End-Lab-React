import "../index.css";
import Content from "./Content";
import UserDetails from "../components/UserDetails/UserDetails";
import ScrollItem from "./ScrollItem";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ButtonLogOut from "./ButtonLogOut";
import Home from "./Home";
import UserInfo from "./UserDetails/UserInfo";
import Photos from "./Photos";
import Albums from "./Albums";
import Album from "./Album";

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
          <Route path="/user" exact>
            <UserDetails />
          </Route>
          <Route path="/user/:id" exact>
            <UserInfo />
          </Route>
          <Route path="user/:id/albums" exact>
            <Content />
          </Route>
          <Route path="user/:id/albums/:id" exact>
            <Album />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/albums" exact>
            <Content />
          </Route>
          <Route path="/albums/:id" exact>
            <Album />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
      <ScrollItem />
    </div>
  );
}

export default App;
