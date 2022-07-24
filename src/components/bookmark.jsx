import React from "react";
import PropTypes from "prop-types";

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
Bookmark.propTypes = {
  status: PropTypes.bool.isRequired
};
export default Bookmark;
