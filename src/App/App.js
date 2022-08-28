import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import Login from "../components/layouts/login";
import Main from "../components/layouts/main";
import NavBar from "../components/navBar";
import Users from "../components/layouts/users";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />

      <Route path="/users/:userId?" component={Users} />
    </div>
  );
}

export default App;
