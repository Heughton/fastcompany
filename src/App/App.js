import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "../components/users";
import api from "../api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        } else return user;
      })
    );
  };

  return (
    <>
      {users.length !== 0 && (
        <Users
          onDelete={handleDelete}
          onToggleBookmark={handleToggleBookmark}
          allUsers={users}
        />
      )}
    </>
  );
};

export default App;
