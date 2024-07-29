import React from "react";

const ListArray = () => {
  const fruits = ["apple", "banana", "grape", "lime", "mango", "orange"];

  const fruitsArray = fruits.map((fruit) => <li>{fruit}</li>);
  return (
    <div>
      <ul>{fruitsArray}</ul>
    </div>
  );
};

export default ListArray;
