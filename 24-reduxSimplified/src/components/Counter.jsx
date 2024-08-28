import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/reducer";

const Counter = () => {
    // comes from the reducer.js from features name of reducers object
    const counter = useSelector((state) => state.counter);
    // disptach simply dispatches the action
    const dispatch = useDispatch();

    return (
        <div>
            <span className="big">{counter}</span>
            <br />
            <button className="dec" onClick={() => dispatch(decrement())}>-</button>
            <button className="reset" onClick={() => dispatch(reset())}>Reset</button>
            <button className="inc" onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;
