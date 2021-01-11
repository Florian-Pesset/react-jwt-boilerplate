import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/logout">Disconnect</Link>
            </li>
            <li>
              <Link to="/register">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/register">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
