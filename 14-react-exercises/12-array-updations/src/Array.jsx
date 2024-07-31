import React from "react";
import { useState } from "react";

const Array = () => {
    const [fruits, setFruits] = useState([
        "apple",
        "banana",
        "orange",
        "grape",
        "mango",
    ]);
    function handleAddFruit(fruit) {
        const newFruit = document.getElementById("newFruit").value;
        document.getElementById("newFruit").value = "";
        if (newFruit !== "")
            setFruits((prevFruits) => [...prevFruits, newFruit]);
    }

    function handleRemoveFruit(index) {
        // we need to ignore the element so put _ there (ignored)
        setFruits(fruits.filter((_, ind) => ind !== index));
    }

    return (
        <div>
            <h2>Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li
                        key={index}
                        onDoubleClick={() => handleRemoveFruit(index)}
                    >
                        {fruit}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                id="newFruit"
                placeholder="fruit to add.."
            ></input>
            <button onClick={handleAddFruit}>Add</button>
            <div className="desc">Double click to remove the item</div>
        </div>
    );
};

export default Array;
