import React from "react";
import ReactDOM from "react-dom/client";

import "./Button.css";
const ConditionalButtons = () => {
    let clickCount = 0;
    const handleClick = (name = "") => {
        clickCount++;
        if (clickCount > 5) console.log("Stop Clicking");
        else console.log(`${name} clicked ${clickCount} times`);
    };
    return (
        <button className="magenta" onClick={() => handleClick()}>
            Click ?
        </button>
    );
};

export default ConditionalButtons;
