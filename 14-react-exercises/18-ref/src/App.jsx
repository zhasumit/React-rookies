import React from "react";
import { useState, useEffect } from "react";

const App = () => {
    // here the state changes when the component re-renders
    // using useRef there is no rerendering
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

    useEffect(() => {
        console.log("Component Rerendered");
    });
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </div>
    );
};

export default App;
