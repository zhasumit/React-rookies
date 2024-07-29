import React from "react";
import { useState } from "react";

const Name = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(false);

    const updateName = () => setName("Patrick");
    const incrementAge = () => setAge(age + 1);
    const toggleEmployment = () => setEmployed(!employed);
    return (
        <>
            <p>
                Hi {name}
                <button type="button" onClick={updateName}>
                    setName
                </button>
            </p>
            <p>
                {age} years old
                <button type="button" onClick={incrementAge}>
                    +1
                </button>
            </p>
            <p>
                I am {employed ? "employed" : "not employed"}
                <button type="button" onClick={toggleEmployment}>
                    change
                </button>
            </p>
        </>
    );
};

export default Name;
