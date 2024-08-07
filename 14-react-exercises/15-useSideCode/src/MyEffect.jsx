import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("#61b8ff");
    const addCount = () => setCount(count + 1);
    const subCount = () => setCount(count - 1);

    // [] : Empty dependency array : only at time of mounting
    // Add some changes only at the time of mounting
    // Write some cleanup code like getters and setters 
    useEffect(() => {
        document.title = `Counter useEffect`;
    }, []);

    // at change of count change the document title
    useEffect(() => {
        document.title = `COUNT: ${count}`;
    });

    // Mount + Re-rendering times changing
    useEffect(() => {
        document.title = `COUNT: ${count}`;
    }, [count]);

    // also helps in organisation of code
    // Multiple dependecies useEffect (upon mounting + rerendering any dependencies)
    useEffect(() => {
        let col = color === "#ffa500" ? "Orange" : "Blue";
        document.title = `COUNT: ${count} | ${col}Ptr`;
    }, [count, color]);

    const changeColor = () => {
        setColor((c) => (c === "#ffa500" ? "#61b8ff" : "#ffa500"));
    };

    return (
        <>
            <p style={{ color: color }} className="countPointer">
                {count}
            </p>
            <button onClick={addCount}>+</button>
            <button onClick={subCount}>-</button>
            <br />
            <button onClick={changeColor}>Flip Color</button>
        </>
    );
};

export default MyEffect;
