import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/register">
          <Register setToken={setToken} />
        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard token={token} /> : <Redirect to="/login" />}
        </Route>
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
};

export default App;
