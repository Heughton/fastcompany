import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import Login from "../components/layouts/login";
import Main from "../components/layouts/main";
import NavBar from "../components/navBar";
import UsersLayout from "../components/usersLayout";

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />

      <Route path="/users/:userId?" component={UsersLayout} />
    </div>
  );
}

export default App;
