import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../features/reducer";

const InputCounter = () => {
    const [input, setInput] = useState(0);
    const dispatch = useDispatch();
    const setCounterValue = (e) => {
        e.preventDefault();
        dispatch(setValue(input)); // setValue comes from reducer.js
        setInput("");
    };

    return (
        <form onSubmit={setCounterValue}>
            <input
                type="text"
                placeholder="set count ..."
                value={input}
                
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button className="changeCounter" type="submit">🔄</button>
        </form>
    );
};

export default InputCounter;


