import React from "react";
import PropTypes from "prop-types";

const PropList = (props) => {
  const { items: fruits, category: title } = props; //taking the items part as the fruits prop

  const fruitsArray = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <strong>{fruit.calories}</strong>
    </li>
  ));

  return (
    <>
      <h2>{title}</h2>
      <ol>{fruitsArray}</ol>
    </>
  );
};

PropList.defaultProps = {
  category: "SomeCategory Name",
  items: [],
};

PropList.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default PropList;
