import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import Login from "../components/layouts/login";
import Main from "../components/layouts/main";
import NavBar from "../components/navBar";
<<<<<<< HEAD
import Users from "../components/layouts/users";
=======
import UsersLayout from "../components/usersLayout";
>>>>>>> a6320c70776711e5f5704f7bde2c83df365ce62e

function App() {
  return (
    <div>
      <NavBar />
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />

<<<<<<< HEAD
      <Route path="/users/:userId?" component={Users} />
=======
      <Route path="/users/:userId?" component={UsersLayout} />
>>>>>>> a6320c70776711e5f5704f7bde2c83df365ce62e
    </div>
  );
}

export default App;
