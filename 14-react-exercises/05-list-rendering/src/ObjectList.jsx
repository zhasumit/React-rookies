import React from "react";

const ObjectList = () => {
  const fruits = [
    { id: 1, name: "grape", color: "purple", calories: 62 },
    { id: 2, name: "mango", color: "yellow", calories: 140 },
    { id: 3, name: "apple", color: "red", calories: 104 },
    { id: 4, name: "orange", color: "orange", calories: 45 },
    { id: 5, name: "banana", color: "yellow", calories: 72 },
    { id: 6, name: "lime", color: "greenyellow", calories: 20 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name));
  fruits.sort((a, b) => b.name.localeCompare(a.name)); // ReverseAlphabetical
  fruits.sort((a, b) => a.calories - b.calories); // Sort using calories
  fruits.sort((a, b) => b.calories - a.calories); // Reverse numeric calories

  const fruitsArray = fruits.map((fruit) => (
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

export default ObjectList;
