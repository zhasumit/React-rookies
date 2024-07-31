import React from "react";
import { useState } from "react";

const ArrayObject = () => {
    const [cars, setCars] = useState([]);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(new Date().getFullYear());

    function handleAddCar() {
        const newCar = {
            YEAR: year,
            MAKE: make,
            MODEL: model,
        };
        setCars((c) => [...c, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    const handleRemoveCar = (index) =>
        setCars((c) => c.filter((_, i) => i !== index));

    const handleModel = (e) => setModel(e.target.value);
    const handleYear = (e) => setYear(e.target.value);
    const handleMake = (e) => setMake(e.target.value);

    return (
        <div>
            <h2>Cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li
                        key={index}
                        onDoubleClick={() => handleRemoveCar(index)}
                    >
                        {car.MODEL} {car.MAKE} {car.YEAR}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(e) => handleModel(e)}
            />
            <br />
            <input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => handleYear(e)}
            />
            <br />
            <input
                type="text"
                placeholder="Make"
                value={make}
                onChange={(e) => handleMake(e)}
            />
            <br />
            <button onClick={handleAddCar}>Add</button>
            <div className="desc"> DOUBLE click to remove object</div>
        </div>
    );
};

export default ArrayObject;
