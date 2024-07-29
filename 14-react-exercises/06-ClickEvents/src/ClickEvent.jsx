import React from "react";
import "./Button.css";
const ClickEvent = () => {
    // event object has the details of the interactions
    const handleClick = (e) => {
        console.log(e);
        e.target.textContent = "Event in console...";
    };

    return (
        <button className="orange" onClick={(event) => handleClick(event)}>
            Event button
        </button>
    );
};

export default ClickEvent;
