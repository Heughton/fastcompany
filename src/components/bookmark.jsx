import React from "react";

const Bookmark = ({ status }) => {
  const getClassBookmark = () => {
    let classes = "bi bi-bookmark";
    classes += status ? "-fill" : "";
    return classes;
  };
  return (
    <button className="btn">
      <i className={getClassBookmark()}></i>
    </button>
  );
};

export default Bookmark;
