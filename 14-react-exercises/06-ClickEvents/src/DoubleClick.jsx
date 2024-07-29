import React from "react";
import "./Button.css";
const DoubleClick = () => {
    const handleClick = (e) => {
        e.target.textContent = "Ouch 🤕";
    };

    return (
        <button className="pink" onDoubleClick={(e) => handleClick(e)}>
            Double Click
        </button>
    );
};

export default DoubleClick;
