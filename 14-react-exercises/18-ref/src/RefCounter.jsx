import React, { useEffect, useRef } from "react";

const RefCounter = () => {
    // useRef returns a ref object with current value set by you
    // Ref is a js object with one property current
    // Ref is used to refer to elements from the DOM
    const ref = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Mounted");
    });

    function incrementCount() {
        ref.current++;
        console.log(ref.current);
    }
    function decrementCount() {
        ref.current--;
        console.log(ref.current);
    }

    // Ref is to make the changes without re-rendering
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
        inputRef.current.style.backgroundColor = "#4d5edb";
        inputRef.current.placeholder = "Wanna write sth?";
        console.log("Input Focused");
    };

    return (
        <div>
            <h1>{ref.current}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>

            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>let Me access</button>
        </div>
    );
};

export default RefCounter;
