import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // useState uses current state to calculate the NEXT state
    // They donot trigger update
    // React batches the update to optimize performance
    // NEXT state becomes CURRENT state
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    const randomise = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        setCount(randomNumber);
    };

    // WHat is the problem with the batch updates in this case?
    const incrementMultiples = () => {
        // lets say count is 5
        setCount(count + 1); // 5 + 1 = 6 (but not updated to 6 since batching)
        setCount(count + 1); // 5 + 1 = 6
        setCount(count + 1); // 5 + 1 = 6
        // This wont work since the second call to setCount is not a new state
        // so we are updating same thing three different times and then update it
    };

    // Solution to the updates function arrow function with
    // prevState => prevState updations
    const incrementManyTimes = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        // Now it increments the count three times

        // Takes pending state to calculate the next state
        // Puts updater function in a queue (waiting in line)
        // during next rerender, it will call the updates in same order

        // in reset updater is not necessary since prevState doesnot matter
    };

    const incTwoTimes = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        // we can do this directly in one line  setCount(count + 2)
    };

    // updater function = A function passed as an argument to setState() usually
    //                    ex. setYear(y => y + 1)
    //                    Allow for safe updates based on the previous state
    //                    Used with multiple state updates and asynchronous functions
    //                    Good practice to use updater functions
    
    const incThreeTimes = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    };

    const decTwoTimes = () => {
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
        // we can do this directly in one line  setCount(count + 2)
    };

    const decThreeTimes = () => {
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div className="counter">
            <h1 className="counterHead" onClick={randomise}>
                {count}
            </h1>
            <p className="desc">Click the number to assign som random value</p>

            <button className="dec" onClick={decrementCount}>
                -1
            </button>
            <button id="resetBtn" onClick={resetCount}>
                Reset
            </button>
            <button className="inc" onClick={incrementCount}>
                +1
            </button>
            <br />
            <button className="dec round" onClick={decThreeTimes}>
                -3
            </button>
            <button className="dec round" onClick={decTwoTimes}>
                -2
            </button>
            <button className="inc round" onClick={incTwoTimes}>
                +2
            </button>
            <button className="inc round" onClick={incThreeTimes}>
                +3
            </button>
        </div>
    );
};

export default Counter;
