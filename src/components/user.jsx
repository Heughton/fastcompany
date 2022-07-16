import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onToggleBookmark,
  onDelete,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((elem) => (
          <Qualitie key={elem._id} {...elem} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
