import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/counterContext";

const Component1 = () => {
    const value = useContext(counterContext);
    return <div>{value.count}</div>;
};

export default Component1;
