import React from "react";
import { useState } from "react";

const ObjectHandler = () => {
    const [car, setCar] = useState({
        make: "Toyota",
        model: "Corolla",
        year: 2023,
        color: "Blue",
    });

    // spread and put the key with the event value into the car object
    // overrides the previous key with the new value (old value is removed )
    // {key1: value, key2:value ..... , key1:value} so the older key1 is removed
    const handleMakeChange = (e) =>
        setCar((prev) => ({ ...prev, make: e.target.value }));
    const handleModelChange = (e) =>
        setCar((prev) => ({ ...prev, model: e.target.value }));
    const handleYearChange = (e) =>
        setCar((prev) => ({ ...prev, year: e.target.value }));
    const handleColorChange = (e) =>
        setCar((prev) => ({ ...prev, color: e.target.value }));

    return (
        <div id="ObjectContainer">
            <div>
                <input
                    type="text"
                    value={car.make}
                    onChange={(e) => handleMakeChange(e)}
                ></input>
                <input
                    type="text"
                    value={car.model}
                    onChange={(e) => handleModelChange(e)}
                ></input>
                <input
                    type="text"
                    value={car.color}
                    onChange={(e) => handleColorChange(e)}
                ></input>
                <input
                    type="number"
                    value={car.year}
                    onChange={(e) => handleYearChange(e)}
                ></input>
            </div>
            <p>
                Current car : {car.make} {car.model} {car.color} {car.year}
            </p>
        </div>
    );
};

export default ObjectHandler;
