import React from "react";
import "./Button.css";
const ElementsWithBtn = () => {
    const dogo = "./dog.jpg";
    const takeActions = (e) => {
        e.target.style.display = "none";
        console.log("Dog was shy and hid itself!");
    };
    return <img src={dogo} onClick={takeActions} />;
};

export default ElementsWithBtn;
