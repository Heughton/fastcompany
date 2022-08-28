import React, { useEffect, useState } from "react";
import api from "../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleBack = () => {
    history.push("/users");
  };
  if (user) {
    return (
      <div className=" ">
        <h1 className="display-2 alert alert-info" role="alert">
          {user.name}
        </h1>
        <h3>Профессия: {user.profession.name}</h3>
        <h3>
          Качества: <QualitiesList qualities={user.qualities} />
        </h3>
        <h4>Встретился, раз: {user.completedMeetings}</h4>
        <h3>Рейтинг: {user.rate}</h3>
        <button className="btn btn-primary" type="submit" onClick={handleBack}>
          Все пользователи
        </button>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserPage;
