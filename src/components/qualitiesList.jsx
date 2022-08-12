import React from "react";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((elem) => (
        <Qualitie key={elem._id} {...elem} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: PropTypes.array
};
export default QualitiesList;
