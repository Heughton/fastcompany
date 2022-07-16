import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Users from "../components/users";
import SearchStatus from "../components/searchStatus";
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

  return users.length !== 0 ? (
    <>
      <SearchStatus length={users.length} />

      <Users
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
        users={users}
      />
    </>
  ) : (
    <SearchStatus length={users.length} />
  );
};

export default App;
