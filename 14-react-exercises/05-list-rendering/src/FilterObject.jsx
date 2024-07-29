import React from "react";

const FilterObject = () => {
  const fruits = [
    { id: 1, name: "grape", color: "purple", calories: 62 },
    { id: 2, name: "mango", color: "yellow", calories: 140 },
    { id: 3, name: "apple", color: "red", calories: 104 },
    { id: 4, name: "orange", color: "orange", calories: 45 },
    { id: 5, name: "banana", color: "yellow", calories: 72 },
    { id: 6, name: "lime", color: "greenyellow", calories: 20 },
  ];

  const lowCalFruits = fruits.filter((fruits) => fruits.calories < 100);
  const highCalFruits = fruits.filter((fruits) => fruits.calories >= 100); 

  const fruitsArray = lowCalFruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <strong>{fruit.calories}</strong>
    </li>
  ));
  return (
    <div>
      <ol>{fruitsArray}</ol>
    </div>
  );
};

export default FilterObject;
