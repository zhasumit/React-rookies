import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    const randomise = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        setCount(randomNumber);
    };
    return (
        <div className="counter">
            <h1 className="counterHead" onClick={randomise}>
                {count}
            </h1>
            <p className="desc">Click the number to assign som random value</p>
            <button id="dec" onClick={decrementCount}>
                -1
            </button>
            <button id="resetBtn" onClick={resetCount}>
                Reset
            </button>
            <button id="inc" onClick={incrementCount}>
                +1
            </button>
        </div>
    );
};

export default Counter;
