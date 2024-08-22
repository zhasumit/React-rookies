import React from "react";
import Component1 from "./Component1";
import { counterContext } from "../context/counterContext";
import { useContext } from "react";

const Button = () => {
    const {count, setCount} = useContext(counterContext);

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                <Component1 />
            </button>
        </div>
    );
};

export default Button;
