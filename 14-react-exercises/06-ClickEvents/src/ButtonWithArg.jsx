import React from "react";
import "./Button.css";
const ButtonWithArg = () => {
    // in case of having some arguments we can invoke function right away
    // so we use () => handleClick(someArgument)
    const handleClick = (name = "") => console.log(`${name} clicked Button`);
    return <button className="red" onClick={() => handleClick("User")}>Arg Button</button>;
};

export default ButtonWithArg;
