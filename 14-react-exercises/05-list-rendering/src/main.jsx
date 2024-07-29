import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListArray from "./ListArray.jsx";
import ObjectList from "./ObjectList.jsx";
import FilterObject from "./FilterObject.jsx";
import PropList from "./PropList.jsx";
const fruits = [
  { id: 1, name: "grape", color: "purple", calories: 62 },
  { id: 2, name: "mango", color: "yellow", calories: 140 },
  { id: 3, name: "apple", color: "red", calories: 104 },
  { id: 4, name: "orange", color: "orange", calories: 45 },
  { id: 5, name: "banana", color: "yellow", calories: 72 },
  { id: 6, name: "lime", color: "greenyellow", calories: 20 },
];

const Vegetables = [
  { id: 7, name: "Potatoes", calories: 132 },
  { id: 8, name: "Celery", calories: 16 },
  { id: 9, name: "Carrots", calories: 25 },
  { id: 10, name: "Tomato", calories: 67 },
  { id: 11, name: "Corn", calories: 132 },
  { id: 12, name: "Brocolli", calories: 30 },
];

const exercises = [];
const sweets = [];

ReactDOM.createRoot(document.getElementById("root")).render(
  // what if the list is empty -> then donot show the elements (NULL)
  <React.StrictMode>
    <ListArray />
    <ObjectList />
    <FilterObject />
    <PropList items={fruits} category="food" />
    <PropList items={Vegetables} />
    <PropList />

    {exercises.length > 0 ? (
      <PropList items={exercises} category="Exercise" />
    ) : null}

    {sweets.length > 0 && <PropList items={sweets} category="Deserts" />}
  </React.StrictMode>
);
