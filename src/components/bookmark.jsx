import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
  const getClassBookmark = () => {
    let classes = "bi bi-bookmark";
    classes += status ? "-fill" : "";
    return classes;
  };
  return (
    <button className="btn" {...rest}>
      <i className={getClassBookmark()}></i>
    </button>
  );
};
Bookmark.propTypes = {
  status: PropTypes.bool
};
export default Bookmark;
