import React from "react";

const Bookmark = ({status, ...rest})=>{
    const getClassBookmark =()=>{
        let classes = "bi bi-bookmark"
        classes += status ? "-fill" : ""
        return classes
    }
    return (
        <button className="btn" {...rest}>
            <i className={getClassBookmark()}></i>
        </button>
    )
}

export default Bookmark