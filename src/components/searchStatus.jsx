import React from "react";

const SearchStatus = ({ length }) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += !length ? "bg-danger" : "bg-primary";
    return classes;
  };
  const lastOne = Number(length.toString().slice(-1));
  if (length > 4 && length < 15)
    return (
      <h1 className={getBadgeClasses()}>
        {length} человек тусанет с тобой сегодня
      </h1>
    );
  if ([2, 3, 4].indexOf(lastOne) >= 0)
    return (
      <h1 className={getBadgeClasses()}>
        {length} человека тусанут с тобой сегодня
      </h1>
    );
  if (lastOne === 1)
    return (
      <h1 className={getBadgeClasses()}>
        {length} человек тусанет с тобой сегодня
      </h1>
    );
  return (
    <h1 className={getBadgeClasses()}>Никто не тусанет с тобой сегодня</h1>
  );
};

export default SearchStatus;
